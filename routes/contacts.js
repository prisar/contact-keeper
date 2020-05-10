const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

// @route   GET  api/contacts
// @desc    Get all contacts
// @access  private
router.get('/', auth, async (req, res) => {

    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/contacts
// @desc    Create new contact
// @access  private
router.post('/',
    [
        auth,
        [
            check("name", "Name is required").not().isEmpty(),
            check("email", "Please include a valid email").isEmail()
        ]
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, type } = req.body;
        console.log('user', req.user);

        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id
            });

            const contact = await newContact.save();

            res.json(contact);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    });

// @route   PUT  api/contacts/:id
// @desc    Update contact
// @access  private
router.put('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.send(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;