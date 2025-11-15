import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// Import all routes
import authRoutes from '../src/routes/authRoutes';
import aiRoutes from '../src/routes/ai.routes';
import reportRoutes from '../src/routes/report.routes';
import testRoutes from '../src/routes/test.routes';

// Load environment variables
dotenv.config();

const expressApp = express();

// Middleware
expressApp.use(cors());
expressApp.use(express.json());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/wellnesswave';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
expressApp.use('/api/auth', authRoutes);
expressApp.use('/api/ai', aiRoutes);
expressApp.use('/api/reports', reportRoutes);
expressApp.use('/api/test', testRoutes);

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

export default serverless(expressApp);
export const config = {
  api: {
    bodyParser: true,
  },
};