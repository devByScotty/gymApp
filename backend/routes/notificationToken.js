// routes/notificationToken.js
const express = require('express');
const NotificationToken = require('../models/NotificationToken');
const router = express.Router();

// Register notification token for a user
router.post('/', async (req, res) => {
  try {
    const { userId, token } = req.body;
    const existingToken = await NotificationToken.findOne({ userId });

    if (existingToken) {
      existingToken.token = token;
      await existingToken.save();
    } else {
      const notificationToken = new NotificationToken({ userId, token });
      await notificationToken.save();
    }

    res.status(201).json({ message: 'Notification token saved' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to save token' });
  }
});

module.exports = router;
