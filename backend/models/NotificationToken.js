// models/NotificationToken.js
const mongoose = require('mongoose');

const NotificationTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  token: { type: String, required: true }, // Device notification token for push
}, { timestamps: true });

module.exports = mongoose.model('NotificationToken', NotificationTokenSchema);
