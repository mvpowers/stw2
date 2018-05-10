const express = require('express');
const group = require('../controllers/group');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/', group.addOption);
router.get('/', verifyToken, group.retrieveGroups);
router.post('/new', group.newGroup);

module.exports = router;
