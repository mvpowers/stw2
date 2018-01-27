const express = require('express');
const router = express.Router();
const result = require('../controllers/result');

router.post('/question', result.addQuestion);
router.get('/question', result.retrieveQuestion);

module.exports = router;
