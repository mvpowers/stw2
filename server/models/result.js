const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema({
  name: { type: String },
  votes: {
    type: Number,
    required() { return this.name !== null; },
  },
});

const commentSchema = new Schema({
  voteFor: { type: String },
  text: {
    type: String,
    required() { return this.voteFor !== null; },
  },
  likes: {
    type: Number,
    required() { return this.voteFor !== null; },
  },
});

const resultSchema = new Schema({
  question: { type: String, required: true },
  timeAsked: { type: Date },
  votes: [voteSchema],
  comments: [commentSchema],
  votesVisible: { type: Boolean, required: true },
});

module.exports = mongoose.model('Result', resultSchema);
