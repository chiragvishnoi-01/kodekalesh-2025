import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import CommonDashboardElements from './CommonDashboardElements';
import { motion } from 'framer-motion';
import HeroSection from '../features/HeroSection';

const PublicDashboard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            <HeroSection />
            <motion.div 
                className="text-center py-6 md:py-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                    {t('public_dashboard_title')}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                <p className="mt-6 text-base-content/80 max-w-3xl mx-auto text-lg">
                    Monitor water quality and disease outbreaks in Northeast India with real-time data and AI-powered insights.
                </p>
            </motion.div>
            <CommonDashboardElements />
        </div>
    );
};

export default PublicDashboard;