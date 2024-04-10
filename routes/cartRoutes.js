// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// GET all carts
router.get('/', cartController.getAllCarts);

// GET cart by ID
router.get('/:id', cartController.getCartById);

// POST create new cart
router.post('/', cartController.createCart);

// PUT update cart by ID
router.put('/:id', cartController.updateCart);

// DELETE cart by ID
router.delete('/:id', cartController.deleteCart);

module.exports = router;
