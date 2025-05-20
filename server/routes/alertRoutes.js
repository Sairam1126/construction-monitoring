const express = require('express');
const router = express.Router();
const AlertRule = require('../models/AlertRule');
const AlertLog = require('../models/AlertLog');
const Detection = require('../models/Detection');

// ✅ Test route to check if alerts route is connected
router.get('/test', (req, res) => {
  res.send('✅ Alerts route is working');
});

// 📄 GET all alert rules
router.get('/rules', async (req, res) => {
  try {
    const rules = await AlertRule.find();
    res.status(200).json(rules);
  } catch (error) {
    console.error('❌ Error fetching alert rules:', error);
    res.status(500).json({ error: 'Failed to fetch alert rules' });
  }
});

// ➕ POST to create a new alert rule
router.post('/rules', async (req, res) => {
  try {
    console.log("Incoming Alert Rule Body:", req.body);
    const rule = new AlertRule(req.body);
    await rule.save();
    res.status(201).json({ message: '✅ Alert rule created', rule });
  } catch (error) {
    console.error('❌ Error creating alert rule:', error);
    res.status(500).json({ error: 'Failed to create alert rule' });
  }
});

// 📄 GET all alert logs
router.get('/logs', async (req, res) => {
  try {
    const logs = await AlertLog.find().populate('detectionId ruleId');
    res.status(200).json(logs);
  } catch (error) {
    console.error('❌ Error fetching alert logs:', error);
    res.status(500).json({ error: 'Failed to fetch alert logs' });
  }
});

// ➕ POST to create a new alert log
router.post('/logs', async (req, res) => {
  try {
    console.log("📥 Creating alert log for:", req.body);

    const { detectionId, ruleId, message } = req.body;

    const log = new AlertLog({
      detectionId,
      ruleId,
      message,
      timestamp: new Date()
    });

    await log.save();

    res.status(201).json({ message: '✅ Alert log created', log });
  } catch (error) {
    console.error('❌ Error creating alert log:', error);
    console.error(error.stack); // <-- ADD THIS
    res.status(500).json({ error: 'Failed to create alert log' });
  }
});

// 🧪 POST a test alert log manually
router.post('/testlog', async (req, res) => {
  try {
    const testLog = new AlertLog({
      ruleId: req.body.ruleId,
      detectionId: req.body.detectionId,
      timestamp: new Date()
    });

    await testLog.save();
    res.status(201).json({ message: '✅ Test alert log added', log: testLog });
  } catch (error) {
    console.error('❌ Error saving test alert log:', error);
    res.status(500).json({ error: 'Failed to save test alert log' });
  }
});

module.exports = router;
