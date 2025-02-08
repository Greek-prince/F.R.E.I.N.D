const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    name: String,
    image: String,
    bio: String,
    keyEpisodes: [String],
    relationships: [String],
    quotes: [String],
});

module.exports = mongoose.model('Character', characterSchema);
