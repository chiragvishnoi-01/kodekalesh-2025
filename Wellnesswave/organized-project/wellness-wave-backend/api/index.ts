import express from 'express';
import serverless from 'serverless-http';
import app from '../src/app';

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

export default serverless(expressApp);