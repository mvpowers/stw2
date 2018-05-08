const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const config = require('../config');

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
  resetToken: { type: String },
  resetExpire: { type: Date },
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  return bcrypt.hash(user.password, config.SALT_ROUNDS, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    return next();
  });
});

userSchema.plugin(uniqueValidator, {
  message: '{PATH} is already registered',
});
module.exports = mongoose.model('User', userSchema);
