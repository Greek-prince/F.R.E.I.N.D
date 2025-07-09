const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Connect to database
connectDB();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use user routes
app.use('/', userRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).render('404', { url: req.originalUrl });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
