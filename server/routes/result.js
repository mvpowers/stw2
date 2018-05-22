const express = require('express');
const result = require('../controllers/result');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/question', result.addQuestion);
router.get('/question', verifyToken, result.retrieveActiveQuestion);
router.get('/active', verifyToken, result.retrieveActiveResult); // need to update
router.post('/vote', result.submitVote); // need to update
router.post('/comment', result.addComment); // need to update
router.post('/like', result.likeComment); // need to update

module.exports = router;
