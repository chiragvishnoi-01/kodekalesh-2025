
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { WaterQualityReport, DiseaseCaseReport, RiskLevel } from '../types';
import api from '../src/services/api';

interface DataContextType {
    waterReports: WaterQualityReport[];
    diseaseReports: DiseaseCaseReport[];
    addWaterReport: (report: Omit<WaterQualityReport, 'id' | 'timestamp' | 'riskLevel'>) => Promise<void>;
    addDiseaseReport: (report: Omit<DiseaseCaseReport, 'id' | 'timestamp'>) => Promise<void>;
    fetchReports: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const calculateRiskLevel = (ph: number, turbidity: number, bacteria: number): RiskLevel => {
    if (bacteria > 500 || turbidity > 60 || ph < 6.5 || ph > 8.5) {
        return RiskLevel.HIGH;
    }
    if (bacteria > 100 || turbidity > 30) {
        return RiskLevel.MEDIUM;
    }
    return RiskLevel.LOW;
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [waterReports, setWaterReports] = useState<WaterQualityReport[]>([]);
    const [diseaseReports, setDiseaseReports] = useState<DiseaseCaseReport[]>([]);

    const fetchReports = async () => {
        try {
            const response = await api.get('/reports');
            setWaterReports(response.data.waterReports);
            setDiseaseReports(response.data.diseaseReports);
        } catch (error) {
            console.error('Failed to fetch reports:', error);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const addWaterReport = async (reportData: Omit<WaterQualityReport, 'id' | 'timestamp' | 'riskLevel'>) => {
        try {
            const riskLevel = calculateRiskLevel(reportData.ph, reportData.turbidity, reportData.bacteria);
            const response = await api.post('/reports/water', { ...reportData, riskLevel });
            setWaterReports(prevReports => [response.data, ...prevReports]);
        } catch (error) {
            console.error('Failed to add water report:', error);
        }
    };

    const addDiseaseReport = async (reportData: Omit<DiseaseCaseReport, 'id' | 'timestamp'>) => {
        try {
            const response = await api.post('/reports/disease', reportData);
            setDiseaseReports(prevReports => [response.data, ...prevReports]);
        } catch (error) {
            console.error('Failed to add disease report:', error);
        }
    };

    return (
        <DataContext.Provider value={{ waterReports, diseaseReports, addWaterReport, addDiseaseReport, fetchReports }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
