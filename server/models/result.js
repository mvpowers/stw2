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
  likedBy: {
    type: Array,
    default: [],
  },
});

const groupEntrySchema = new mongoose.Schema({
  group: { type: String, required: true },
  members: { type: Array, default: [] },
  votes: [voteSchema],
  comments: [commentSchema],
});

const resultSchema = new mongoose.Schema({
  question: { type: String, required: true },
  timeAsked: { type: Date },
  votesVisible: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
  groupEntry: [groupEntrySchema],
});

module.exports = mongoose.model('Result', resultSchema);
