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
      expiresIn: '5s',
    });
    return res.json({ token });
  });
};
