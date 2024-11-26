const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();


router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Save user ID in session
    req.session.userId = user._id;
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
});

router.get('/status', (req, res) => {
  if (req.session.userId) {
    return res.status(200).json({ isLoggedIn: true });
  }
  res.status(200).json({ isLoggedIn: false });
});


router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out', error: err });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logout successful' });
  });
});


router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userExists = await User.findOne({ username, email });
    console.log(userExists);

    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists!" })
    }

    const user = new User({ username, email, hashedPassword });
    await user.save();
    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating user', error });
  }
});

module.exports = router;