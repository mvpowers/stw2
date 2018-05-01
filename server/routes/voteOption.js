const express = require('express');
const result = require('../controllers/voteOption');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/', result.addOption);
router.get('/', verifyToken, result.retrieveVoteOptions);

module.exports = router;
