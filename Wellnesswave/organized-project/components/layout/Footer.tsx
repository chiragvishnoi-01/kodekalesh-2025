import React from 'react';
import { useData } from '../../context/DataContext';

const Footer: React.FC = () => {
    const { waterReports, diseaseReports, generateMockData } = useData();
    
    // Calculate statistics
    const totalReports = waterReports.length + diseaseReports.length;
    const highRiskWaterReports = waterReports.filter(report => report.riskLevel === 'high').length;
    const totalDiseaseCases = diseaseReports.reduce((sum, report) => sum + report.caseCount, 0);
    
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gradient-to-r from-base-300 to-base-200 text-base-content border-t border-base-300 mt-12">
            <div className="container mx-auto py-8 px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-primary mb-4">Wellness Wave</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Monitoring water quality and disease outbreaks in Northeast India
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 text-primary">Dashboard Statistics</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-base-300">
                                <div className="text-2xl font-bold text-primary">{totalReports}</div>
                                <div className="text-sm text-gray-600">Total Reports</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-base-300">
                                <div className="text-2xl font-bold text-error">{highRiskWaterReports}</div>
                                <div className="text-sm text-gray-600">High Risk Water</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-base-300">
                                <div className="text-2xl font-bold text-warning">{totalDiseaseCases}</div>
                                <div className="text-sm text-gray-600">Disease Cases</div>
                            </div>
                        </div>
                        
                        {/* Mock Data Button */}
                        <div className="mt-6">
                            <button 
                                onClick={generateMockData}
                                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-focus transition-colors text-sm font-medium"
                            >
                                Generate Mock Data
                            </button>
                            <p className="text-xs text-gray-500 mt-2">
                                Click to populate dashboard with sample data
                            </p>
                        </div>
                    </div>
                    
                    {/* Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-base-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Wellness Wave. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <p className="text-gray-500 text-sm">
                            Powered by <span className="text-primary font-semibold">AI Technology</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;