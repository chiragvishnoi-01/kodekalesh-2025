import { Request, Response } from 'express';
import { WaterQualityReport } from '../models/waterQualityReport.model';
import { DiseaseCaseReport } from '../models/diseaseCaseReport.model';

const calculateRiskLevel = (ph: number, turbidity: number, bacteria: number): 'low' | 'medium' | 'high' => {
  if (bacteria > 500 || turbidity > 60 || ph < 6.5 || ph > 8.5) return 'high';
  if (bacteria > 100 || turbidity > 30) return 'medium';
  return 'low';
};

export const getAllReports = async (req: Request, res: Response): Promise<void> => {
  try {
    const waterReports = await WaterQualityReport.find()
      .sort({ createdAt: -1 })
      .populate('reportedBy', 'name');
    
    const diseaseReports = await DiseaseCaseReport.find()
      .sort({ createdAt: -1 })
      .populate('reportedBy', 'name');

    res.json({ waterReports, diseaseReports });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
};

export const createWaterReport = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user?._id) {
      res.status(401).json({ message: 'User not authenticated' });
      return;
    }

    const { location, lat, lng, ph, turbidity, bacteria } = req.body;
    const riskLevel = calculateRiskLevel(ph, turbidity, bacteria);

    const report = await WaterQualityReport.create({
      location,
      lat,
      lng,
      ph,
      turbidity,
      bacteria,
      riskLevel,
      reportedBy: req.user._id
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create water report' });
  }
};

export const createDiseaseReport = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user?._id) {
      res.status(401).json({ message: 'User not authenticated' });
      return;
    }

    const { location, disease, caseCount } = req.body;

    const report = await DiseaseCaseReport.create({
      location,
      disease,
      caseCount,
      reportedBy: req.user._id
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create disease report' });
  }
};

export const getReportsByLocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { location } = req.params;
    
    const waterReports = await WaterQualityReport.find({ location })
      .sort({ createdAt: -1 })
      .populate('reportedBy', 'name');
      
    const diseaseReports = await DiseaseCaseReport.find({ location })
      .sort({ createdAt: -1 })
      .populate('reportedBy', 'name');

    res.json({ waterReports, diseaseReports });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
};

export const getReportStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const waterStats = await WaterQualityReport.aggregate([
      {
        $group: {
          _id: '$riskLevel',
          count: { $sum: 1 }
        }
      }
    ]);

    const diseaseStats = await DiseaseCaseReport.aggregate([
      {
        $group: {
          _id: '$disease',
          totalCases: { $sum: '$caseCount' }
        }
      }
    ]);

    res.json({ waterStats, diseaseStats });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
};