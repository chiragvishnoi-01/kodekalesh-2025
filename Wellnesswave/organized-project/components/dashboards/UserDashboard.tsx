import React from 'react';
import Card from '../ui/Card';
import ImageUpload from '../features/ImageUpload';
import { useTranslation } from '../../hooks/useTranslation';
import CommonDashboardElements from './CommonDashboardElements';
import { motion } from 'framer-motion';
import WaveDivider from '../ui/WaveDivider';

const UserDashboard: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <motion.div 
            className="space-y-8 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="text-center py-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                    {t('user_dashboard_title')}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                <p className="mt-6 text-base-content/80 max-w-3xl mx-auto text-lg">
                    Analyze water samples, view regional health trends, and contribute to community health monitoring.
                </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card title={t('analyze_water_image_title')} className="shadow-xl border border-base-300">
                    <p className="text-base-content mb-4 text-lg">
                        {t('analyze_water_image_desc')}
                        <strong className="text-primary"> {t('analyze_water_image_disclaimer')}</strong>
                    </p>
                    <ImageUpload />
                </Card>
            </motion.div>
            
            <WaveDivider />
            
            <motion.div
                className="text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                    {t('public_dashboard_title')}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
                <p className="mt-4 text-base-content/80 max-w-2xl mx-auto">
                    Access the same regional health insights available to public health officials.
                </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <CommonDashboardElements />
            </motion.div>
        </motion.div>
    );
};

export default UserDashboard;