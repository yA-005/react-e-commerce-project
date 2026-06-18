

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());           // enable CORS for frontend
app.use(express.json());   // parse JSON request bodies

// Root route (GET /) – for testing
app.get('/', (req, res) => {
    res.json({ message: 'ShoppyGlobe API' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});