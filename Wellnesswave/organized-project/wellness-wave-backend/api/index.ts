import express from 'express';
import serverless from 'serverless-http';
import app from '../src/app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const expressApp = express();
expressApp.use('/api', app);

// Handle Vercel's health check
expressApp.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Handle the root path
expressApp.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Wellness Wave Backend API', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/wellnesswave';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

export default serverless(expressApp);
export const config = {
  api: {
    bodyParser: true,
  },
};