import React from 'react';
import { useData } from '../../context/DataContext';
import Button from '../ui/Button';

const DashboardStats: React.FC = () => {
    const { waterReports, diseaseReports, generateMockData } = useData();
    
    // Calculate statistics
    const totalReports = waterReports.length + diseaseReports.length;
    const highRiskWaterReports = waterReports.filter(report => report.riskLevel === 'high').length;
    const totalDiseaseCases = diseaseReports.reduce((sum, report) => sum + report.caseCount, 0);
    
    // Debug function to test if the function is being called
    const handleGenerateMockData = () => {
        console.log('Generate mock data button clicked');
        generateMockData();
    };
    
    return (
        <div className="bg-gradient-to-r from-base-300 to-base-200 rounded-2xl p-6 mb-8 border border-base-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary mb-4 md:mb-0">Dashboard Statistics</h2>
                <Button 
                    onClick={handleGenerateMockData} 
                    variant="primary" 
                    size="sm"
                    className="px-4 py-2"
                >
                    Generate Mock Data
                </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-base-300 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="text-2xl font-bold text-primary mb-1">{totalReports}</div>
                    <div className="text-xs text-gray-600">Total Reports</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-base-300 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="text-2xl font-bold text-error mb-1">{highRiskWaterReports}</div>
                    <div className="text-xs text-gray-600">High Risk Water</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-base-300 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="text-2xl font-bold text-warning mb-1">{totalDiseaseCases}</div>
                    <div className="text-xs text-gray-600">Disease Cases</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;