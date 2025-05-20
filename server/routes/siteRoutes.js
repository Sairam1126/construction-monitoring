const express = require('express');
const router = express.Router();
const {
  getAllSites,
  createSite,
  updateSite,
  deleteSite,
  getSiteById,
} = require('../controllers/siteController');

const { protect, admin, manager } = require('../middleware/authMiddleware');

// Get all sites
router.get('/', protect, getAllSites);

// Get single site
router.get('/:id', protect, getSiteById);

// Create a site (Admin & Manager)
router.post('/', protect, manager, createSite);

// Update a site (Admin & Manager)
router.put('/:id', protect, manager, updateSite);

// Delete a site (Admin only)
router.delete('/:id', protect, admin, deleteSite);

module.exports = router;