const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  name: { type: String },
});

const groupSchema = new mongoose.Schema({
  groupId: {
    unique: true,
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  admin: { type: String, required: true },
  members: { type: Array, required: true },
  options: [optionSchema],
});

module.exports = mongoose.model('Group', groupSchema);
