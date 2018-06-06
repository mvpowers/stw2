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
  const { id } = jwtDecode(req.headers['x-access-token']);
  Result.findOne({ active: true }, (err, data) => {
    if (err) return res.status(500).send('Error retrieving result');

    const validGroups = data.groupEntry.filter(entry =>
      entry.members.includes(id),
    );

    const cleanData = {
      _id: data._id,
      votesVisible: data.votesVisible,
      active: data.active,
      question: data.question,
      groupEntry: validGroups,
    };

    return res.json(cleanData);
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
  const { name, voteId, groupId } = req.body;
  if (!name) return res.status(403).send('name is required');
  if (!voteId) return res.status(403).send('voteId is required');
  if (!groupId) return res.status(403).send('groupId is required');
  return Result.findOne(
    // search for active voteId
    {
      active: true,
      'groupEntry.votes.voteId': voteId,
    },
    (err, data) => {
      if (err) return res.status(500).send('Unable to submit vote');
      if (data.length === 0) {
        // if active voteId not found, add entry
        return Result.update(
          { active: true, 'groupEntry.groupId': groupId },
          {
            $push: {
              'groupEntry.$.votes': { name, voteId, value: 1 },
            },
          },
          () => {
            res.send('Vote submitted successfully');
          },
        );
      }
      try {
        data.groupEntry.forEach((entry, i) => {
          if (entry.groupId === groupId) {
            data.groupEntry[i].votes.forEach((vote, j) => {
              if (data.groupEntry[i].votes[j].voteId === voteId) {
                data.groupEntry[i].votes[j].value += 1;
                data.save();
                res.send('Vote submitted successfully');
              }
            });
          }
        });
      } catch (e) {
        res.status(500).send('Unable to submit vote');
      }
    },
  );
};

exports.addComment = (req, res) => {
  const { groupId, voteFor, text } = req.body;

  if (!groupId) return res.status(403).send('groupId is required');
  if (!voteFor) return res.status(403).send('voteFor is required');
  if (!text) return res.status(403).send('text is required');

  return Result.findOneAndUpdate(
    { active: true, 'groupEntry.groupId': groupId },
    { $push: { 'groupEntry.$.comments': { voteFor, text } } },
    { new: true },
    (err, data) => {
      if (!data) return res.status(403).send('Unable to find group');
      if (err) return res.status(500).send('Unable to add comment');
      return res.json(data);
    },
  );
};

exports.likeComment = (req, res) => {
  const { commentId } = req.body;
  const { id } = jwtDecode(req.headers['x-access-token']);

  if (!commentId) return res.status(403).send('commentId is required');

  return Result.findOne(
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

      try {
        return data.groupEntry.forEach((el, i) => {
          if (el.comments.id(commentId) !== null) {
            if (
              data.groupEntry[i].comments.id(commentId).likedBy.includes(id)
            ) {
              data.groupEntry[i].comments.id(commentId).likedBy.pull(id);
              data.save();

              const filtered = data.groupEntry.filter(entry =>
                entry.members.includes(id),
              );
              res.send(filtered);
            } else {
              data.groupEntry[i].comments.id(commentId).likedBy.push(id);
              data.save();

              const filtered = data.groupEntry.filter(entry =>
                entry.members.includes(id),
              );
              res.send(filtered);
            }
          }
        });
      } catch (e) {
        console.log(e);
        res.status(500).send('Unable to like comment');
      }
    },
  );
};
