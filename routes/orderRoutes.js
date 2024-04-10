// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET all orders
router.get('/', orderController.getAllOrders);

// GET order by ID
router.get('/:id', orderController.getOrderById);

// POST create new order
router.post('/', orderController.createOrder);

// PUT update order by ID
router.put('/:id', orderController.updateOrder);

// DELETE order by ID
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
