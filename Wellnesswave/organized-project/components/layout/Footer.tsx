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
        <footer className="bg-gradient-to-r from-base-300 to-base-200 text-base-content border-t border-base-300 mt-12 w-full">
            <div className="container mx-auto py-12 px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-primary mb-4">Wellness Wave</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Monitoring water quality and disease outbreaks in Northeast India with AI-powered insights for better public health.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110" aria-label="Facebook">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110" aria-label="Twitter">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110" aria-label="Instagram">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110" aria-label="LinkedIn">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM6 4a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Stats - Removed and moved to top of dashboard */}
                    
                    {/* Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-semibold mb-6 text-primary">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center transform hover:translate-x-1"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center transform hover:translate-x-1"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center transform hover:translate-x-1"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center transform hover:translate-x-1"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-base-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Wellness Wave. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex items-center">
                        <p className="text-gray-500 text-sm">
                            Powered by <span className="text-primary font-semibold">AI Technology</span>
                        </p>
                        <div className="ml-4 flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;