const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to contact keeper api' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared at port ${PORT}`));