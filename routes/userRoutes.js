// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET user by ID
router.get('/:id', userController.getUserById);

// POST create new user
router.post('/', userController.createUser);

// PUT update user by ID
router.put('/:id', userController.updateUser);

// DELETE user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
