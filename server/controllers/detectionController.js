// controllers/detectionController.js
const Detection = require('../models/Detection');

exports.createDetectionEvent = async (req, res) => {
  try {
    const newEvent = new Detection(req.body);
    await newEvent.save();
    res.status(201).json({ message: 'Detection event saved successfully', data: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error saving detection event', error: error.message });
  }
};

exports.getAllDetectionEvents = async (req, res) => {
  try {
    const events = await Detection.find().sort({ timestamp: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching detection events', error: error.message });
  }
};