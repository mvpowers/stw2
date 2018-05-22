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
  const { name, voteId } = req.body;
  if (!name) return res.status(403).send('Name is required');
  if (!voteId) return res.status(403).send('Vote ID is required');
  Result.find(
    // search for active voteId
    {
      active: true,
      'groupEntry.votes.voteId': voteId,
    },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      if (data.length === 0) {
        // if active voteId not found, add entry
        Result.update(
          { active: true },
          {
            $push: {
              'groupEntry.votes': { name, voteId, value: 1 },
            },
          },
          () => {
            res.send('Successfully logged vote');
          },
        );
      } else {
        Result.update(
          // if active voteId found, increment entry value by 1
          {
            active: true,
            'groupEntry.votes.voteId': voteId,
          },
          { $inc: { 'groupEntry.votes.$.value': 1 } },
          updateErr => {
            if (updateErr) {
              res.status(500).send('Error logging vote');
            }
            res.send('Successfully logged vote');
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

exports.likeComment = (req, res) => {
  Result.find(
    {
      active: true,
      comments: {
        $elemMatch: { _id: req.body.commentId, likedBy: req.body.userId },
      },
    },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      if (data.length === 0) {
        Result.findOneAndUpdate(
          {
            active: true,
            'comments._id': req.body.commentId,
          },
          { $push: { 'comments.$.likedBy': req.body.userId } },
          { new: true },
          (updateErr, updateData) => {
            if (updateErr) {
              res.json(updateErr);
            }
            res.json(updateData);
          },
        );
      } else {
        Result.findOneAndUpdate(
          {
            active: true,
            'comments._id': req.body.commentId,
          },
          { $pull: { 'comments.$.likedBy': req.body.userId } },
          { new: true },
          (updateErr, updateData) => {
            if (updateErr) {
              res.json(updateErr);
            }
            res.json(updateData);
          },
        );
      }
    },
  );
};
