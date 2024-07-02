const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Entry', entrySchema);
