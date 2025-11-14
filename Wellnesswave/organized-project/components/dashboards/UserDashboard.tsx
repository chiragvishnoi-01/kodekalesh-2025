import React from 'react';
import Card from '../ui/Card';
import ImageUpload from '../features/ImageUpload';
import { useTranslation } from '../../hooks/useTranslation';
import CommonDashboardElements from './CommonDashboardElements';
import { motion } from 'framer-motion';

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
                className="text-center py-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h1 className="text-4xl font-bold text-base-content bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t('user_dashboard_title')}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card title={t('analyze_water_image_title')}>
                    <p className="text-base-content mb-4 text-lg">
                        {t('analyze_water_image_desc')}
                        <strong className="text-primary"> {t('analyze_water_image_disclaimer')}</strong>
                    </p>
                    <ImageUpload />
                </Card>
            </motion.div>
            
            <motion.div 
                className="border-t-2 border-dashed border-base-300 my-12 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-200 px-4 py-2 rounded-full">
                    <span className="text-primary font-bold">OR</span>
                </div>
            </motion.div>
            
            <motion.div
                className="text-center"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold text-center text-base-content bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t('public_dashboard_title')}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
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