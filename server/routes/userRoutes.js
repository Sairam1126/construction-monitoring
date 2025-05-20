const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authMiddleware = require('../middleware/authMiddleware');

// Get all users (admin only)
router.get('/', authMiddleware(['admin']), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

module.exports = router;
