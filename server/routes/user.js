const express = require('express');
const user = require('../controllers/user');
const verifyToken = require('../middleware/verifyToken');
const { check } = require('express-validator/check');

const router = express.Router();

router.post(
  '/',
  [
    check('name')
      .exists()
      .trim(),
    check('email')
      .isEmail()
      .withMessage('Email must be valid')
      .trim()
      .normalizeEmail(),
    check('phone')
      .isMobilePhone('en-US')
      .withMessage('Phone number must be valid')
      .trim(),
    check('password')
      .isLength({ min: 5 })
      .withMessage('Password must be at least 5 characters'),
  ],
  user.addUser,
);
router.patch('/', verifyToken, user.updateUser);
router.get('/', verifyToken, user.getAllUsers);
router.post('/signin', user.getToken);
router.post('/recover', user.setRecoveryToken);
router.patch(
  '/password',
  check('newPassword')
    .isLength({ min: 5 })
    .withMessage('New password must be at least 5 characters'),
  user.updatePassword,
);

module.exports = router;
