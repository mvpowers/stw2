const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
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
