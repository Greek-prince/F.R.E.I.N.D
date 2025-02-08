const express = require('express');
const router = express.Router();
const Character = require('../models/character');

// Get all characters
router.get('/', async (req, res) => {
    const characters = await Character.find();
    res.render('characters', { characters });
});

// Add a new character
router.post('/', async (req, res) => {
    const { name, image, bio, keyEpisodes, relationships, quotes } = req.body;
    const character = new Character({
        name,
        image,
        bio,
        keyEpisodes: keyEpisodes.split(','),
        relationships: relationships.split(','),
        quotes: quotes.split(','),
    });
    await character.save();
    res.redirect('/characters');
});

// Delete a character
router.get('/delete/:id', async (req, res) => {
    await Character.findByIdAndDelete(req.params.id);
    res.redirect('/characters');
});

module.exports = router;
