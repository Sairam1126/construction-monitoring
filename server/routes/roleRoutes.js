const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Role = require('../models/Role');

// Get all roles (admin only)
router.get('/', authMiddleware(['admin']), async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
});

module.exports = router;
