

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';   // <-- add this

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'ShoppyGlobe API' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});