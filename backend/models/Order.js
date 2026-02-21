const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: String,
  phone: { type: String, required: true },
  address: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  size: String,
  color: String,
  quantity: { type: Number, default: 1 },
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'placed', enum: ['placed', 'processing', 'shipped', 'delivered', 'cancelled'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
