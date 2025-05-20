const mongoose = require('mongoose');

const detectionSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  confidence: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Detection', detectionSchema);
