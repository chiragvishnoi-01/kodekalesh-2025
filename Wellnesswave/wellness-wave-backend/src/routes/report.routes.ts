import express from 'express';
import { protect, isAshaWorker } from '../middleware/auth.middleware';
import {
  getAllReports,
  createWaterReport,
  createDiseaseReport,
  getReportsByLocation,
  getReportStats
} from '../controllers/report.controller';

const router = express.Router();

router.get('/', getAllReports);
router.get('/location/:location', getReportsByLocation);
router.get('/stats', getReportStats);
router.post('/water', protect, isAshaWorker, createWaterReport);
router.post('/disease', protect, isAshaWorker, createDiseaseReport);

export default router;