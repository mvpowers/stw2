const express = require('express');
const group = require('../controllers/group');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/option', group.addOption);
router.get('/', verifyToken, group.retrieveGroups);
router.post('/new', verifyToken, group.newGroup);
router.patch('/leave', verifyToken, group.removeUserFromGroup);

module.exports = router;
