const usermodel = require('../models/user');

// Render home page
exports.getHome = (req, res) => {
    res.render('index');
};

// Read all users
exports.getAllUsers = async (req, res, next) => {
    try {
        let users = await usermodel.find();
        res.render('read', { users });
    } catch (err) {
        next(err);
    }
};

// Create a new user
exports.createUser = async (req, res, next) => {
    try {
        let { name, image, passion } = req.body;
        await usermodel.create({ name, image, passion });
        res.redirect('/read');
    } catch (err) {
        next(err);
    }
};

// Delete user by ID
exports.deleteUser = async (req, res, next) => {
    try {
        await usermodel.findOneAndDelete({ _id: req.params.id });
        res.redirect('/read');
    } catch (err) {
        next(err);
    }
};

// Edit user form
exports.getEditUser = async (req, res, next) => {
    try {
        let user = await usermodel.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.render('edit', { user });
    } catch (err) {
        next(err);
    }
};

// Update user
exports.updateUser = async (req, res, next) => {
    try {
        let { name, image, passion } = req.body;
        await usermodel.findByIdAndUpdate(req.params.id, { name, image, passion });
        res.redirect('/read');
    } catch (err) {
        next(err);
    }
};
