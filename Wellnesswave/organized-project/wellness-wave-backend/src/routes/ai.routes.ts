import express from 'express';
import { protect } from '../middleware/auth.middleware';
import { 
    generateRiskAnalysis, 
    analyzeWaterImage, 
    getDailyUpdate 
} from '../controllers/ai.controller';

const router = express.Router();

router.post('/risk-analysis', protect, generateRiskAnalysis);
router.post('/analyze-image', protect, analyzeWaterImage);
router.post('/daily-update', protect, getDailyUpdate);

export default router;