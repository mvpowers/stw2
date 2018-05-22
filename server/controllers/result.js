const jwtDecode = require('jwt-decode');
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
            res.json(data);
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
            res.json(data);
          },
        );
      }
    },
  );
};

exports.addComment = (req, res) => {
  const { voteFor, text } = req.body;

  if (!voteFor) return res.status(403).send('voteFor is required');
  if (!text) return res.status(403).send('text is required');

  Result.findOneAndUpdate(
    { active: true },
    { $push: { 'groupEntry.comments': { voteFor, text } } },
    (err, data) => {
      if (err) {
        res.status(403).send('Unable to add comment');
      }
      res.json(data);
    },
  );
};

exports.likeComment = (req, res) => {
  const { commentId } = req.body;
  const { id } = jwtDecode(req.headers['x-access-token']);

  if (!commentId) return res.status(403).send('commentId is required');

  Result.find(
    {
      active: true,
      'groupEntry.comments': {
        $elemMatch: { _id: commentId, likedBy: id },
      },
    },
    (err, data) => {
      if (err) {
        res.status(403).send('Unable to like comment');
      }
      if (data.length === 0) {
        Result.findOneAndUpdate(
          {
            active: true,
            'groupEntry.comments._id': commentId,
          },
          { $push: { 'groupEntry.comments.$.likedBy': id } },
          { new: true },
          (updateErr, updateData) => {
            if (updateErr) {
              res.status(500).send('Unable to like comment');
            }
            res.json(updateData);
          },
        );
      } else {
        Result.findOneAndUpdate(
          {
            active: true,
            'groupEntry.comments._id': commentId,
          },
          { $pull: { 'groupEntry.comments.$.likedBy': id } },
          { new: true },
          (updateErr, updateData) => {
            if (updateErr) {
              res.status(500).send('Unable to like comment');
            }
            res.json(updateData);
          },
        );
      }
    },
  );
};
