const express = require('express');
const result = require('../controllers/result');

const router = express.Router();

router.post('/question', result.addQuestion);
router.get('/question', result.retrieveActiveQuestion);
router.get('/active', result.retrieveActiveResult);
router.post('/vote', result.submitVote);
router.post('/comment', result.addComment);

module.exports = router;
