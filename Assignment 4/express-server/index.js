const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(port, () => {
    console.log(`Success! Your application is running on port http://localhost:${port}.`);
});