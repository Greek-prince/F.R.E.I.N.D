const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const characterRoutes = require('./routes/characters');
const forumRoutes = require('./routes/forum');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');

// MongoDB Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/friends', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/characters', characterRoutes);
app.use('/forum', forumRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
