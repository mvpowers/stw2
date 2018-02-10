const express = require('express');
const router = express.Router();
const result = require('../controllers/result');

router.post('/question', result.addQuestion);
router.get('/active', result.retrieveActive);

module.exports = router;
