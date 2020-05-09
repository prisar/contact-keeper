const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

// @route   GET  api/auth
// @desc    Get loggedin user
router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.send(user);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;