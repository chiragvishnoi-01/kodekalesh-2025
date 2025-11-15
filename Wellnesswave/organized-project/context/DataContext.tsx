import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { WaterQualityReport, DiseaseCaseReport, RiskLevel } from '../types';
import api from '../services/api';

interface DataContextType {
    waterReports: WaterQualityReport[];
    diseaseReports: DiseaseCaseReport[];
    addWaterReport: (report: Omit<WaterQualityReport, 'id' | 'timestamp' | 'riskLevel'>) => Promise<void>;
    addDiseaseReport: (report: Omit<DiseaseCaseReport, 'id' | 'timestamp'>) => Promise<void>;
    fetchReports: () => Promise<void>;
    generateMockData: () => void;
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

// Mock data generator functions
const generateMockWaterReports = (count: number): WaterQualityReport[] => {
    const locations = [
        "Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar",
        "Nagaon", "Tinsukia", "Karimganj", "Goalpara", "Bongaigaon"
    ];
    
    const reports: WaterQualityReport[] = [];
    
    for (let i = 0; i < count; i++) {
        const location = locations[Math.floor(Math.random() * locations.length)];
        const ph = parseFloat((6.0 + Math.random() * 3.0).toFixed(2));
        const turbidity = Math.floor(Math.random() * 100);
        const bacteria = Math.floor(Math.random() * 1000);
        const riskLevel = calculateRiskLevel(ph, turbidity, bacteria);
        
        reports.push({
            id: `water-${Date.now()}-${i}`,
            location,
            lat: 26.0 + Math.random() * 5.0,
            lng: 92.0 + Math.random() * 8.0,
            ph,
            turbidity,
            bacteria,
            reportedBy: "Mock User",
            timestamp: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
            riskLevel
        });
    }
    
    return reports;
};

const generateMockDiseaseReports = (count: number): DiseaseCaseReport[] => {
    const locations = [
        "Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar",
        "Nagaon", "Tinsukia", "Karimganj", "Goalpara", "Bongaigaon"
    ];
    
    const diseases = ["Diarrhea", "Typhoid", "Hepatitis", "Cholera", "Malaria"];
    
    const reports: DiseaseCaseReport[] = [];
    
    for (let i = 0; i < count; i++) {
        const location = locations[Math.floor(Math.random() * locations.length)];
        const disease = diseases[Math.floor(Math.random() * diseases.length)];
        const caseCount = Math.floor(Math.random() * 50) + 1;
        
        reports.push({
            id: `disease-${Date.now()}-${i}`,
            location,
            disease,
            caseCount,
            reportedBy: "Mock User",
            timestamp: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString()
        });
    }
    
    return reports;
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
    
    // Function to generate mock data
    const generateMockData = () => {
        const mockWaterReports = generateMockWaterReports(15);
        const mockDiseaseReports = generateMockDiseaseReports(10);
        
        // Set the mock data in state
        setWaterReports(mockWaterReports);
        setDiseaseReports(mockDiseaseReports);
        
        console.log('Mock data generated successfully!', { mockWaterReports, mockDiseaseReports });
        alert('Mock data generated successfully!'); // Add alert to confirm it's working
    };

    return (
        <DataContext.Provider value={{ waterReports, diseaseReports, addWaterReport, addDiseaseReport, fetchReports, generateMockData }}>
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