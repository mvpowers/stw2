const express = require('express');
const user = require('../controllers/user');

const router = express.Router();

router.post('/', user.addUser);
router.get('/', user.getAllUsers);
router.post('/auth', user.authUser);

module.exports = router;
