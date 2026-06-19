

import express from 'express';
import { User } from '../models/User.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();

// POST /register
router.post('/register', async (req, res) => {
    // will implement in next commit
});

// POST /login
router.post('/login', async (req, res) => {
    // will implement in next commit
});

export default router;