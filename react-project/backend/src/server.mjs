

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import authRoutes from './routes/authRoutes.mjs';
import productRoutes from './routes/productRoutes.mjs';
import { auth } from './middleware/auth.mjs';
import cartRoutes from './routes/cartRoutes.mjs';

dotenv.config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ message: '✅ Test route works in main server!' });
});

// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
// Protected route
app.get('/api/profile', async (req, res) => {
    
    res.json({ message: 'Protected route accessed', user: req.user });
});

// ---- Global error handler (must be last) ----
app.use((err, req, res, next) => {
    console.error('❌ Global error:', err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error'
    });
});

app.listen(5001, () => console.log('Server running on port 5001'));

