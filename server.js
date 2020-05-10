const express = require('express');

require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// connect db
connectDB();

// init middlwares
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to contact keeper api' }));

// routes
app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared at port ${PORT}`));