const Result = require('../models/result');

exports.addQuestion = (req, res) => {
  const addQuestion = new Result(req.body);
  addQuestion.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.retrieveActive = (req, res) => {
  Result.findOne({ active: true }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.retrieveActiveQuestion = (req, res) => {
  Result.findOne({ active: true }, 'question', (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.submitVote = (req, res) => {
  Result.find(
    {
      active: true,
      votes: {
        $elemMatch: { name: req.body.name },
      },
    },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      if (data.length === 0) {
        Result.update(
          { active: true },
          { $push: { votes: { name: req.body.name, value: 1 } } },
          () => {
            res.send(200);
          },
        );
      } else {
        Result.update(
          { active: true, 'votes.name': req.body.name },
          { $inc: { 'votes.$.value': 1 } },
          () => {
            res.send(200);
          },
        );
      }
    },
  );
};
