const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.get('/', (req, res) => {
    res.send('register user');
})

module.exports = router;