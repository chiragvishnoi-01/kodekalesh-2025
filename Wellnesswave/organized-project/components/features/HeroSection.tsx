import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { WaterDropIcon } from '../ui/Icons';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="relative overflow-hidden rounded-3xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animated-bg opacity-30"></div>
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                            {t('public_dashboard_title')}
                        </h1>
                        <p className="text-xl text-base-content/80 mb-8 max-w-2xl">
                            Monitor water quality and disease outbreaks in Northeast India with real-time data and AI-powered insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="px-8 py-4 text-lg">
                                {t('login')}
                            </Button>
                            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                                {t('signup')}
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative glass-effect-enhanced rounded-full p-8 border border-base-300">
                                <WaterDropIcon className="h-48 w-48 text-primary animate-float" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;