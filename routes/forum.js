const express = require('express');
const router = express.Router();
const Thread = require('../models/thread');

// Get all threads
router.get('/', async (req, res) => {
    const threads = await Thread.find();
    res.render('forum', { threads });
});

// Add a new thread
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    const thread = new Thread({ title, content, author });
    await thread.save();
    res.redirect('/forum');
});

// Add a comment to a thread
router.post('/comment/:id', async (req, res) => {
    const thread = await Thread.findById(req.params.id);
    const { author, content } = req.body;
    thread.comments.push({ author, content });
    await thread.save();
    res.redirect('/forum');
});

module.exports = router;
