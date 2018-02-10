const VoteOption = require('../models/voteOption');

exports.addOption = (req, res) => {
  const addQuestion = new VoteOption(req.body);
  addQuestion.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.retrieveVoteOptions = (req, res) => {
  VoteOption.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};
