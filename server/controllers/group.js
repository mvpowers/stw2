const Group = require('../models/group');
const jwtDecode = require('jwt-decode');

exports.addOption = (req, res) => {
  const { id, option } = req.body;
  if (!option) return res.status(403).send("Option's name is required");
  return Group.findByIdAndUpdate(
    id,
    { $push: { options: { option } } },
    { new: true, runValidators: true },
    (err, data) => {
      if (err) return res.status(500).send(err);
      if (!data) return res.status(404).send('Group not found');
      return res.json(data);
    },
  );
};

exports.retrieveGroups = (req, res) => {
  Group.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.newGroup = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  const { name } = req.body;
  const group = new Group({
    name,
    admin: id,
    members: [id],
  });
  group.save((err, data) => {
    if (err) return res.status(500).send(err);
    return res.json(data);
  });
};
