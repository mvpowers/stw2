const express = require('express');
const user = require('../controllers/user');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/', user.addUser);
router.get('/', verifyToken, user.getAllUsers);
router.post('/auth', user.authUser);

module.exports = router;
