const Group = require('../models/group');
const jwtDecode = require('jwt-decode');

exports.addOption = (req, res) => {
  const { id, name } = req.body;
  if (!name) return res.status(403).send("Option's name is required");
  return Group.findByIdAndUpdate(
    id,
    { $push: { options: { name } } },
    { new: true },
    (err, data) => {
      if (err) return res.status(500).send(err);
      if (!data) return res.status(404).send('Group not found');
      return res.json(data);
    },
  );
};

exports.retrieveGroups = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  Group.find({ members: id }, (err, data) => {
    if (err) return res.status(500).send('Unable to retrieve groups');
    if (!data) return res.status(404).send('No groups found');
    // TODO remove unnecessary data from response
    return res.json(data);
  });
};

exports.retrieveAdminGroups = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  Group.find({ admin: id }, (err, data) => {
    if (err)
      return res.status(500).send('Unable to retrieve administered groups');
    const cleanData = data.map(group =>
      Object.assign(
        {},
        {
          _id: group._id,
          groupId: group.groupId,
          name: group.name,
          members: group.members.length,
          options: group.options.length,
        },
      ),
    );
    return res.json(cleanData);
  });
};

exports.newGroup = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  const { name } = req.body;
  const group = new Group({
    name,
    admin: id,
    members: [id],
    groupId: Math.floor(Math.random() * 900000) + 100000,
  });
  group.save((err, data) => {
    if (err) return res.status(500).send('Unable to create new group');
    return res.json(data);
  });
};

exports.removeUserFromGroup = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  const { groupId } = req.body;
  if (!groupId) return res.status(403).send('Group ID is required');
  return Group.findByIdAndUpdate(
    groupId,
    { $pull: { members: id } },
    (err, data) => {
      if (err) return res.status(500).send('Unable to remove user from group');
      if (!data) return res.status(500).send('Unable to find group');
      return Group.find({ members: id }, (error, groups) => {
        if (error) return res.status(500).send('Unable to retrieve groups');
        // TODO remove unnecessary data from response
        return res.send({ groups, deleted: data.name });
      });
    },
  );
};
