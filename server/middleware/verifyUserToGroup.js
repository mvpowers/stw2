const jwtDecode = require('jwt-decode');
const Group = require('../models/group');

function verifyUserToGroup(req, res, next) {
  const token = jwtDecode(req.headers['x-access-token'].id);
  const { groupId } = req.body;

  if (!token) return res.status(403).send('No token provided');
  if (!groupId) return res.status(403).send('No groupId provided');

  Group.findOne({ _id: groupId, 'members.$.id': token }, (err, data) => {
    if (err) return err;
    if (!data) return res.status(403).send('User not found in group');
    return next();
  });
  return true;
}

module.exports = verifyUserToGroup;
