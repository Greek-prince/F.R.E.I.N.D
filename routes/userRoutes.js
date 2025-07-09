const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getHome);
router.get('/read', userController.getAllUsers);
router.post('/create', userController.createUser);
router.get('/delete/:id', userController.deleteUser);
router.get('/edit/:id', userController.getEditUser);
router.post('/edit/:id', userController.updateUser);

module.exports = router;
