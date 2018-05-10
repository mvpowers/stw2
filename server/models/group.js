const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  option: { type: String, required: true, unique: true },
});

const groupSchema = new mongoose.Schema({
  groupId: {
    unique: true,
    type: String,
    default: Math.floor(Math.random() * 900000) + 100000,
  },
  name: { type: String, required: true },
  admin: { type: String, required: true },
  members: { type: Array, required: true },
  options: [optionSchema],
});

module.exports = mongoose.model('Group', groupSchema);
