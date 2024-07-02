const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

// Import Routes
const entriesRoute = require('./routes/entries');
app.use('/entries', entriesRoute);

// Connect to DB
const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Connected to DB!');
        
        // Start Listening on a different port
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to DB', error);
    }
};

startServer();
