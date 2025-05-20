const mongoose = require('mongoose');

const detectionEventSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
    enum: ['intrusion', 'no-helmet', 'no-vest', 'fire', 'other'],
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
  detectedBy: {
    type: String,
    default: 'AI',
  }
});

module.exports = mongoose.model('DetectionEvent', detectionEventSchema);
