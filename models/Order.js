const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalPrice: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
