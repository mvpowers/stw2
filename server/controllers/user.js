const config = require('../config');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.addUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getAllUsers = (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.authUser = (req, res) => {
  User.findOne({ phone: req.body.phone }, (err, data) => {
    if (err) {
      res.send(err);
    }
    if (!data) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found',
      });
    } else if (data) {
      if (data.password !== req.body.password) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.',
        });
      }
      const payload = {
        admin: data.admin,
      };

      const token = jwt.sign(payload, config.SECRET, {
        expiresIn: 5,
      });

      res.json({
        success: true,
        message: 'Enjoy your token!',
        token,
      });
    }
  });
};
