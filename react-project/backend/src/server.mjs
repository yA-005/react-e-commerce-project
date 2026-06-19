

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import authRoutes from './routes/authRoutes.mjs';
import { auth } from './middleware/auth.mjs';   
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/profile', auth, (req, res) => {
    res.json({
        message: 'Protected route accessed',
        user: req.user
    });
});

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'ShoppyGlobe API' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});