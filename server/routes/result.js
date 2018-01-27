const express = require('express');
const router = express.Router();
const result = require('../controllers/result');

router.post('/question', result.addQuestion);

module.exports = router;
