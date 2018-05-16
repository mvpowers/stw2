const Group = require('../models/group');
const jwtDecode = require('jwt-decode');

exports.addOption = (req, res) => {
  const { groupId, name } = req.body;
  const { id } = jwtDecode(req.headers['x-access-token']);

  if (!name) return res.status(403).send("Option's name is required");
  if (!groupId) return res.status(403).send('Group ID is required');

  return Group.findOneAndUpdate(
    { _id: groupId, admin: id },
    { $push: { options: { name } } },
    { new: true },
    (err, data) => {
      if (err) return res.status(500).send('Unable to add option to group');
      if (!data) return res.status(404).send('Group not found');
      return res.json(data);
    },
  );
};

exports.removeOption = (req, res) => {
  const { optionId } = req.body;
  const { id } = jwtDecode(req.headers['x-access-token']);

  if (!optionId) return res.status(403).send("Option's ID is required");

  Group.findOneAndUpdate(
    { admin: id, 'options._id': optionId },
    { $pull: { options: { _id: optionId } } },
    { new: true },
    (err, data) => {
      if (err) return res.status(500).send('Unable to remove option');
      if (!data) return res.status(404).send('Unable to find option');
      return res.json(data);
    },
  );
};

exports.retrieveGroups = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);

  Group.find({ 'members.id': id }, (err, data) => {
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

exports.retrieveSingleAdminGroup = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  const { groupId } = req.params;

  if (!groupId) return res.status(403).send('Group ID is required');

  return Group.findOne({ admin: id, groupId }, (err, data) => {
    if (err) return res.status(500).send('Unable to retrieve group');
    if (data.length === 0) return res.status(404).send('Group not found');
    return res.json(data);
  });
};

exports.newGroup = (req, res) => {
  const { id, name } = jwtDecode(req.headers['x-access-token']);
  const groupName = req.body.name;
  const group = new Group({
    name: groupName,
    admin: id,
    members: [{ id, name, pending: false }],
    groupId: Math.floor(Math.random() * 900000) + 100000,
  });
  group.save((err, data) => {
    if (err) return res.status(500).send('Unable to create new group');
    return res.json(data);
  });
};

exports.removeSelfFromGroup = (req, res) => {
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

exports.removeMemberFromGroup = (req, res) => {
  const { id } = jwtDecode(req.headers['x-access-token']);
  const { groupId, memberId } = req.body;

  if (!groupId) return res.status(403).send('Group ID is required');
  if (!memberId) return res.status(403).send('Member ID is required');

  return Group.findOneAndUpdate(
    { _id: groupId, admin: id },
    { $pull: { members: { id: memberId } } },
    { new: true },
    (err, data) => {
      if (err) return res.status(500).send(err);
      if (!data) return res.status(500).send('Unable to find member');
      return res.json(data);
    },
  );
};
