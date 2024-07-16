const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');

// Dummy user data - in a real app, this would be stored in a database
const users = [];

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, password: hashedPassword };
  users.push(user);
  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
