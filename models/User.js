const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    shippingAddress: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
