const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, 
    description: { type: String, required: true },
    image: { type: String, required: true },
    pricing: { type: Number, required: true },
    shippingCost: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
