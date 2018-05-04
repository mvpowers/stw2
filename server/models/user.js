const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
});

userSchema.plugin(uniqueValidator, {
  message: '{PATH} is already registered',
});
module.exports = mongoose.model('User', userSchema);
