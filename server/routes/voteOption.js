const express = require('express');
const result = require('../controllers/voteOption');

const router = express.Router();

router.post('/', result.addOption);
router.get('/', result.retrieveVoteOptions);

module.exports = router;
