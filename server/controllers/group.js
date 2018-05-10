const Group = require('../models/group');

exports.addOption = (req, res) => {
  const addQuestion = new Group(req.body);
  addQuestion.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
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
  console.log(req, res);
};
