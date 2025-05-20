// routes/aiRoutes.js
const express = require('express');
const router = express.Router();
const Detection = require('../models/Detection');
const AlertRule = require('../models/AlertRule');
const AlertLog = require('../models/AlertLog');

// 📌 Log a new detection and evaluate alert rules
router.post('/detections', async (req, res) => {
  try {
    const detection = new Detection(req.body);
    await detection.save();

    // Find matching alert rules
    const rules = await AlertRule.find({ type: detection.type });
    for (let rule of rules) {
      if (detection.confidence >= rule.threshold) {
        // Create alert log
        const log = new AlertLog({
          detectionId: detection._id,
          ruleId: rule._id,
          message: `Alert triggered: ${detection.type} confidence ${detection.confidence}`
        });
        await log.save();
      }
    }

    res.status(201).json({ message: 'Detection logged', detection });
  } catch (error) {
    console.error('Error logging detection:', error);
    res.status(500).json({ error: 'Failed to log detection' });
  }
});
console.log("✅ aiRoutes loaded");

module.exports = router;
