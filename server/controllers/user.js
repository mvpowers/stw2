const jwt = require('jsonwebtoken');
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
      return res.status(423).json(err);
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

    const validUser = data.password === req.body.password;

    if (!validUser) {
      return res.status(401).send('Incorrect password');
    }
    const payload = { admin: data.admin };
    const token = jwt.sign(payload, config.SECRET, {
      expiresIn: 5,
    });
    return res.json({ token });
  });
};