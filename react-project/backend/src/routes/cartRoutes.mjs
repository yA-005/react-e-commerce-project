

import express from 'express';
import { Cart } from '../models/Cart.mjs';
import { Product } from '../models/Product.mjs';
import { auth } from '../middleware/auth.mjs';

const router = express.Router();

// All cart routes are protected – apply auth middleware to all routes in this router
router.use(auth);

// GET /api/cart – view user's cart
router.get('/', async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
        if (!cart) {
            // Return empty cart if user has no cart yet
            return res.json({ userId: req.user.userId, items: [] });
        }
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST /api/cart – add a product to cart (or increment quantity)
router.post('/', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        if (!productId) {
            return res.status(400).json({ message: 'productId is required' });
        }

        // Validate product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Find or create user's cart
        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = new Cart({ userId: req.user.userId, items: [] });
        }

        // Check if product already in cart
        const itemIndex = cart.items.findIndex(
            item => item.productId.toString() === productId
        );
        if (itemIndex > -1) {
            // Increment quantity (or set to provided quantity)
            const qty = quantity || 1;
            cart.items[itemIndex].quantity += qty;
        } else {
            // Add new item
            cart.items.push({ productId, quantity: quantity || 1 });
        }

        await cart.save();
        await cart.populate('items.productId');
        res.status(201).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT /api/cart/:productId – update quantity of a specific product
router.put('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;

        // Validate quantity
        if (!quantity || quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        const cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(item => item.productId.toString() === productId);
        if (!item) {
            return res.status(404).json({ message: 'Item not in cart' });
        }

        item.quantity = quantity;
        await cart.save();
        await cart.populate('items.productId');
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE /api/cart/:productId – remove a product from cart (will be in commit 23)
// We'll add that later.

export default router;