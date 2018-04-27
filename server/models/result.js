const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  name: { type: String },
  voteId: { type: String },
  value: {
    type: Number,
    required() {
      return this.name !== null;
    },
  },
});

const commentSchema = new mongoose.Schema({
  voteFor: { type: String },
  text: {
    type: String,
    required() {
      return this.voteFor !== null;
    },
  },
  likes: {
    type: Number,
    required() {
      return this.voteFor !== null;
    },
  },
});

const resultSchema = new mongoose.Schema({
  question: { type: String, required: true },
  timeAsked: { type: Date },
  votes: [voteSchema],
  comments: [commentSchema],
  votesVisible: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
});

module.exports = mongoose.model('Result', resultSchema);
