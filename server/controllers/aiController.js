// controllers/aiController.js
const Detection = require('../models/Detection');

exports.handleDetection = async (req, res) => {
  try {
    const { siteId, imageUrl, detectedObjects } = req.body;

    // You could add logic here to trigger real AI detection via an API or local model

    const detection = new Detection({
      siteId,
      imageUrl,
      detectedObjects,
      timestamp: new Date()
    });

    await detection.save();

    res.status(201).json({ message: 'Detection event saved', detection });
  } catch (error) {
    console.error('Detection Error:', error);
    res.status(500).json({ message: 'Failed to save detection event' });
  }
};
