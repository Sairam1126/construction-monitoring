const express = require('express');
const router = express.Router();
const detectionController = require('../controllers/detectionController');

// POST detection event
router.post('/', detectionController.createDetectionEvent);

// GET all detection events
router.get('/', detectionController.getAllDetectionEvents);

const Detection = require('../models/Detection');

// Temporary route to add a dummy detection


router.post('/dummy', async (req, res) => {
  try {
    const dummyDetection = new Detection({
      label: 'Helmet Violation',
      confidence: 0.92,
      imageUrl: 'C:/Users/shalo/construction-monitoring/server/uploads/sample.jpg', // <-- use valid image URL
      timestamp: new Date(),
    });

    await dummyDetection.save();
    res.status(201).json({ message: '✅ Dummy detection created', detection: dummyDetection });
  } catch (error) {
    console.error('❌ Error creating dummy detection:', error.message);
    res.status(500).json({ error: 'Failed to create dummy detection' });
  }
});

module.exports = router;
