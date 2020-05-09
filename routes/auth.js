const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

// @route   GET  api/auth
// @desc    Get loggedin user
router.get('/', auth, (req, res) => {
    res.send('get loggedin user');
});