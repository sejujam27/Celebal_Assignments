const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/authMiddleware');

// Define a protected route
router.get('/posts', protectRoute, (req, res) => {
  res.json([
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' },
  ]);
});

module.exports = router;
