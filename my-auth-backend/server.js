const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

connectDB();

app.use(express.json({ extended: false}));

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));