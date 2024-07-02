const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');

// Create
router.post('/', async (req, res) => {
    const entry = new Entry({
        name: req.body.name,
        description: req.body.description
    });
    try {
        const savedEntry = await entry.save();
        res.json(savedEntry);
    } catch (err) {
        res.json({ message: err });
    }
});

// Read
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.find();
        res.json(entries);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update
router.patch('/:entryId', async (req, res) => {
    try {
        const updatedEntry = await Entry.updateOne(
            { _id: req.params.entryId },
            { $set: { name: req.body.name, description: req.body.description } }
        );
        res.json(updatedEntry);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete
router.delete('/:entryId', async (req, res) => {
    try {
        const removedEntry = await Entry.remove({ _id: req.params.entryId });
        res.json(removedEntry);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
