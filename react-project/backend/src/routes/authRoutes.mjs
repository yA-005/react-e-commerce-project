

import express from 'express';
import { User } from '../models/User.mjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Helper: validate email format (simple)
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// POST /register
router.post('/register', async (req, res) => {
    console.log('✅ Register route hit!');
    try {
        const { name, email, password } = req.body;

        // ---- Input validation ----
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create user
        const user = new User({ name, email, password });
        await user.save();

        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        const userObj = user.toObject();
        delete userObj.password;

        res.status(201).json({ token, user: userObj });
    } catch (error) {
        console.error(error);
        // Pass to global error handler
        next(error);
    }
});

// POST /login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // ---- Input validation ----
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        const userObj = user.toObject();
        delete userObj.password;

        res.json({ token, user: userObj });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

export default router;