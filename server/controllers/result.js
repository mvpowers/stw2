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

exports.retrieveActiveResult = (req, res) => {
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
        $elemMatch: { name: req.body.name, voteId: req.body.voteId },
      },
    },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      if (data.length === 0) {
        Result.update(
          { active: true },
          {
            $push: {
              votes: { name: req.body.name, voteId: req.body.voteId, value: 1 },
            },
          },
          () => {
            res.sendStatus(200);
          },
        );
      } else {
        Result.update(
          {
            active: true,
            'votes.name': req.body.name,
            'votes.voteId': req.body.voteId,
          },
          { $inc: { 'votes.$.value': 1 } },
          () => {
            res.sendStatus(200);
          },
        );
      }
    },
  );
};

exports.addComment = (req, res) => {
  Result.findOneAndUpdate(
    { active: true },
    { $push: { comments: { voteFor: req.body.voteFor, text: req.body.text } } },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    },
  );
};
