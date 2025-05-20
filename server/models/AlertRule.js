// models/AlertRule.js
const mongoose = require('mongoose');

const alertRuleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high'], required: true }
});

module.exports = mongoose.model('AlertRule', alertRuleSchema);