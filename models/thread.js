const mongoose = require('mongoose');

const threadSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
    comments: [
        {
            author: String,
            content: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
    votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Thread', threadSchema);
