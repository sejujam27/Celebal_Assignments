const express = require('express');
const app = express();
require('dotenv').config();

// Import your route modules
const authRoutes = require('./routes/authRoutes');
const postsRoutes = require('./routes/postsRoutes');
const protectRoute = require('./middleware/authMiddleware');


// Use JSON middleware
app.use(express.json());

// Use your routes
app.use('/api/auth', authRoutes);
app.use('/api', postsRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
