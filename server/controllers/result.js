const Result = require('../models/result');

exports.addQuestion = (req, res) => {
  console.log('body', req.body);
  const addQuestion = new Result(req.body);
  addQuestion.save((err, data) => {
    if (err) { res.send(err); }
    res.json(data);
  });
};
