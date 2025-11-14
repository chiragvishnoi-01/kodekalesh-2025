import { Request, Response } from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

interface RiskAnalysisRequest {
  waterReports: any[];
  diseaseReports: any[];
}

export const generateRiskAnalysis = async (req: Request, res: Response) => {
  try {
    const { waterReports, diseaseReports } = req.body as RiskAnalysisRequest;

    const prompt = `Analyze these water quality reports: ${JSON.stringify(waterReports)}
                   and disease reports: ${JSON.stringify(diseaseReports)}`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ analysis: text || 'No analysis available' });
  } catch (error) {
    res.status(500).json({ error: 'AI Analysis failed' });
  }
};

export const analyzeWaterImage = async (req: Request, res: Response) => {
  try {
    const { base64Image, mimeType } = req.body;

    const prompt = `
        Analyze this image of a water sample. Based purely on visual indicators like color, clarity, and visible particles, provide a brief, non-technical assessment.
        Is the water likely to be contaminated or safe for drinking?
        Do not provide medical advice. State that this is not a substitute for proper lab testing.
        Example response: "The water appears cloudy and contains visible particles, suggesting potential contamination. Laboratory testing is required for a definitive analysis."
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent([prompt, { inlineData: { data: base64Image, mimeType } }]);
    const response = await result.response;
    const text = response.text();

    res.json({ analysis: text || 'No analysis available' });
  } catch (error) {
    res.status(500).json({ error: 'Image analysis failed' });
  }
};

export const getDailyUpdate = async (req: Request, res: Response) => {
  try {
    const { waterReports, diseaseReports } = req.body;

    const prompt = `
        You are a public health AI data simulator for the "Wellness Wave" project in Northeast India.
        Your task is to generate plausible new data points for today based on recent trends and simulated news events.

        Current Data Context (most recent reports):
        Water Quality: ${JSON.stringify(waterReports.slice(0, 3), null, 2)}
        Disease Cases: ${JSON.stringify(diseaseReports.slice(0, 3), null, 2)}

        Simulated News for Today: "Local news outlets report minor, localized flooding in areas around Agartala, Tripura, after heavy overnight rainfall. Health officials are monitoring the situation for potential water contamination."

        Based on this simulated news and the provided data:
        1. Generate one new water quality report for "Agartala, Tripura". The flooding should plausibly increase turbidity and bacteria levels slightly compared to recent data. Keep pH stable.
        2. Generate one new disease case report for "Agartala, Tripura". The potential contamination might lead to a small, new cluster of "Diarrhea" cases.

        Return the two new reports in JSON format with keys "waterReport" and "diseaseReport".
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const data = JSON.parse(text);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Daily update failed' });
  }
};
