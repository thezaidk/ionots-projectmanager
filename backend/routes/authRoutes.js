const express = require('express');
const jwt = require('jsonwebtoken');
const Candidate = require('../models/Candidate');
const Manager = require('../models/Manager');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    let user;

    if (role === 'candidate') {
      user = new Candidate({ firstName, lastName, email, password });
    } else if (role === 'manager') {
      user = new Manager({ firstName, lastName, email, password });
    }

    await user.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, role },
      JWT_SECRET,
    );

    res.json({ message: 'Signup successful!', token, role });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed!', error });
  }
});

// Signin Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Candidate.findOne({ email, password });
    let role = 'candidate';

    if (!user) {
      user = await Manager.findOne({ email, password });
      role = 'manager';
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, role },
      JWT_SECRET,
    );

    res.json({ message: 'Signin successful!', token, role });
  } catch (error) {
    res.status(500).json({ message: 'Signin failed!', error });
  }
});

module.exports = router;
