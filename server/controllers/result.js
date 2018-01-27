const Result = require('../models/result');

exports.addQuestion = (req, res) => {
  const addQuestion = new Result(req.body);
  addQuestion.save((err, data) => {
    if (err) { res.send(err); }
    res.json(data);
  });
};

exports.retrieveQuestion = (req, res) => {
  Result.findOne({ active: true }, (err, data) => {
    if (err) { res.send(err); }
    res.json(data);
  });
};
