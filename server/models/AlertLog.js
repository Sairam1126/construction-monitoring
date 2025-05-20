const mongoose = require('mongoose');

const AlertLogSchema = new mongoose.Schema({
  detectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Detection', required: true },
  ruleId: { type: mongoose.Schema.Types.ObjectId, ref: 'AlertRule', required: true },
  message: { type: String, required: true }, // ✅ Must be here
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AlertLog', AlertLogSchema);