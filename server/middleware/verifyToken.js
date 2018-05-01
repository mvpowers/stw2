const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send('No token provided');
  }

  jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send('Failed to authenticate token');
    }
    req.userId = decoded.id;
    return next();
  });
  return true;
}

module.exports = verifyToken;
