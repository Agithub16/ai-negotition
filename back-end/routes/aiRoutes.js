const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/predict-strategy', aiController.predictStrategy);
router.post('/suggest-tactic', aiController.suggestTactic);
router.post('/emotion-analysis', aiController.analyzeEmotion);

module.exports = router;
