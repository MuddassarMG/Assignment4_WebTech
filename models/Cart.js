const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
