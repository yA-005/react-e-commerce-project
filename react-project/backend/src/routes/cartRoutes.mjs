

import express from 'express';
import { Cart } from '../models/Cart.mjs';
import { Product } from '../models/Product.mjs';
import { auth } from '../middleware/auth.mjs';

const router = express.Router();

// ---- Protect all cart routes ----
router.use(auth);

// ---- GET /api/cart – view user's cart (populates product details) ----
router.get('/', async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
        if (!cart) {
            return res.json({ userId: req.user.userId, items: [] });
        }
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// ---- POST /api/cart – add product or increment quantity (with product existence check) ----
router.post('/', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        if (!productId) {
            return res.status(400).json({ message: 'productId is required' });
        }

        // ✅ Validation: check if product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = new Cart({ userId: req.user.userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(
            item => item.productId.toString() === productId
        );
        if (itemIndex > -1) {
            const qty = quantity || 1;
            cart.items[itemIndex].quantity += qty;
        } else {
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

// ---- PUT /api/cart/:productId – update quantity (validates quantity > 0) ----
router.put('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;

        // ✅ Validation: quantity must be at least 1
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

// ---- DELETE /api/cart/:productId – remove a product from cart ----
router.delete('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Remove item from the items array
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        await cart.populate('items.productId');
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;