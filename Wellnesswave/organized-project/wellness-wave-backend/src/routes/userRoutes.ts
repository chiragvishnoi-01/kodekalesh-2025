import express from 'express';
import { getUserById as getUserProfile, updateUser as updateUserProfile } from '../controllers/userController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

// Route to get user profile
router.get('/profile', authMiddleware, getUserProfile);

// Route to update user profile
router.put('/profile', authMiddleware, updateUserProfile);

export default router;