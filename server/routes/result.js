const express = require('express');
const result = require('../controllers/result');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/question', result.addQuestion);
router.get('/question', verifyToken, result.retrieveActiveQuestion);
router.get('/active', verifyToken, result.retrieveActiveResult);
router.post('/vote', result.submitVote);
router.post('/comment', result.addComment);
router.post('/like', result.likeComment);

module.exports = router;
