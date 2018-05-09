const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const uuidv4 = require('uuid/v4');
const config = require('../config');
const User = require('../models/user');

exports.addUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }
  const user = new User(matchedData(req));
  user.save((err, data) => {
    if (err) {
      return res.status(422).json(err);
    }
    return res.json(data);
  });
  return true;
};

exports.getAllUsers = (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getToken = (req, res) => {
  User.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      return res.status(500);
    }
    if (!data) {
      return res.status(404).send('User not found');
    }

    return bcrypt.compare(req.body.password, data.password, (error, result) => {
      if (error) return error;
      if (!result) return res.status(401).send('Incorrect password');
      const payload = { id: data._id, admin: data.admin };
      const token = jwt.sign(payload, config.SECRET, {
        expiresIn: 20,
      });
      return res.json({ token });
    });
  });
};

exports.setRecoveryToken = (req, res) => {
  const token = uuidv4();
  const updateThroughEmail = (email, response, resetToken) => {
    User.findOneAndUpdate(
      { email },
      { resetToken, resetExpire: Date.now() + 10 * 60 * 1000 },
      (err, data) => {
        if (err) {
          return response.status(500);
        }
        if (!data) return response.status(404).send('Email not found');
        return response.send(
          `Confirmation email has been sent. Checkout http://${
            config.CLIENT_HOST
          }:${config.CLIENT_PORT}/reset/${resetToken}`,
        );
      },
    );
  };

  const updateThroughPhone = (phone, response, resetToken) => {
    User.findOneAndUpdate(
      { phone },
      { resetToken, resetExpire: Date.now() + 10 * 60 * 1000 },
      (err, data) => {
        if (err) {
          return response.status(500);
        }
        if (!data) return response.status(404).send('Phone not found');
        return response.send(
          `Confirmation text has been sent. Checkout http://${
            config.CLIENT_HOST
          }:${config.CLIENT_PORT}/reset/${resetToken}`,
        );
      },
    );
  };

  try {
    const sanitizedPhone = req.body.recoveryAccount.replace(/\D+/g, '');
    if (
      req.body.recoveryAccount.includes('@') &&
      req.body.recoveryAccount.includes('.')
    ) {
      updateThroughEmail(req.body.recoveryAccount, res, token);
    } else if (/\d{10}/.test(sanitizedPhone)) {
      updateThroughPhone(sanitizedPhone, res, token);
    } else {
      res.status(404).send('Not a valid email or phone');
    }
  } catch (e) {
    res.status(500).send('Unable to reset password');
  }
};

exports.updatePassword = (req, res) => {
  User.findOne({ resetToken: req.body.resetToken }, (err, data) => {
    if (err) {
      return res.status(500);
    }
    if (!data) {
      return res.status(404).send('Reset token not found');
    }
    if (data.resetExpire < Date.now()) {
      return res.status(403).send('Reset token expired');
    }
    User.update(
      { resetToken: req.body.resetToken },
      { $set: { password: req.body.newPassword } },
      (error, savedData) => {
        if (error) {
          return res.status(500);
        }
        return res.send(savedData);
      },
    );
  });
};
