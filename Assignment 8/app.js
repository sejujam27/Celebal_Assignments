const express = require('express');
const multer = require('multer');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`File uploaded: ${req.file.filename}`);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route to intentionally trigger an error
app.get('/error', (req, res) => {
  throw new Error('Intentional error');
});

// Route to fetch data from an external API
app.get('/external-api', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch data from external API');
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
