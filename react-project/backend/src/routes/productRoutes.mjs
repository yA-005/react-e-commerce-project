

import express from 'express';
import mongoose from 'mongoose';          // <-- import mongoose
import { Product } from '../models/Product.mjs';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single product by ID
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        // Validate if id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

export default router;