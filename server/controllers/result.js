const jwtDecode = require('jwt-decode');
const Result = require('../models/result');
const groupController = require('./group');

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
  const { group, voteFor, text } = req.body;

  if (!group) return res.status(403).send('group is required');
  if (!voteFor) return res.status(403).send('voteFor is required');
  if (!text) return res.status(403).send('text is required');

  return res.send(
    groupController.verifyUserToGroup(
      '5ae752494cc98c27bfe70831',
      '5afc62cb1925b421d0ecf7e7',
    ),
  );

  // Result.findOneAndUpdate(
  //   { active: true, 'groupEntry.group': group },
  //   { $push: { 'groupEntry.$.comments': { voteFor, text } } },
  //   { new: true },
  //   (err, data) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(403).send('Unable to add comment');
  //     }
  //     res.json(data);
  //   },
  // );
};

exports.likeComment = (req, res) => {
  const { commentId } = req.body;
  const { id } = jwtDecode(req.headers['x-access-token']);

  if (!commentId) return res.status(403).send('commentId is required');

  Result.findOne(
    {
      active: true,
      groupEntry: {
        $elemMatch: {
          'comments._id': commentId,
        },
      },
    },
    (err, data) => {
      if (err) return res.status(500).send('Unable to find comment');

      return data.groupEntry.forEach((el, i) => {
        if (el.comments.id(commentId) !== null) {
          if (data.groupEntry[i].comments.id(commentId).likedBy.includes(id)) {
            data.groupEntry[i].comments.id(commentId).likedBy.pull(id);
            data.save();
            res.send(data);
          } else {
            data.groupEntry[i].comments.id(commentId).likedBy.push(id);
            data.save();
            res.send(data);
          }
        }
      });
    },
  );
};
