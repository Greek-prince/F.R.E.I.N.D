const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    image: String,
    passion: String
});

module.exports = mongoose.model('User', userSchema);