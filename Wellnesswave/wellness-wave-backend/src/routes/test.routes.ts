import express from 'express';
import mongoose from 'mongoose';
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = express.Router();

router.get('/system-check', async (req, res) => {
    try {
        // Test MongoDB Connection
        const dbState = mongoose.connection.readyState;
        
        // Handle potentially undefined db
        if (!mongoose.connection.db) {
            throw new Error('Database not initialized');
        }
        
        const collections = await mongoose.connection.db.listCollections().toArray();
        
        // Test Gemini API
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Test connection");

        res.json({
            mongodb: {
                connected: dbState === 1,
                collections: collections.map(c => c.name),
                status: dbState === 1 ? 'Connected' : 'Disconnected'
            },
            gemini: {
                connected: !!result,
                status: result ? 'Working' : 'Failed'
            }
        });
    } catch (error: unknown) {
        res.status(500).json({
            error: error instanceof Error ? error.message : 'An unknown error occurred',
            stack: process.env.NODE_ENV === 'development' ? 
                  error instanceof Error ? error.stack : undefined : 
                  undefined
        });
    }
});

export default router;