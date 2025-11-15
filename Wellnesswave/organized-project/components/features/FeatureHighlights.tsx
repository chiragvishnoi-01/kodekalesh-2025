import React from 'react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { 
    GlobeIcon,
    BrainCircuitIcon,
    AwardIcon,
    CheckCircleIcon,
    LayoutDashboardIcon,
    MessageSquareIcon
} from '../ui/Icons';

const features = [
    {
        title: "Real-time Monitoring",
        description: "Continuous tracking of water quality parameters with instant alerts for anomalies.",
        icon: <GlobeIcon className="h-8 w-8 text-primary" />
    },
    {
        title: "AI-Powered Predictions",
        description: "Advanced machine learning models predict potential outbreaks 3-7 days in advance.",
        icon: <BrainCircuitIcon className="h-8 w-8 text-secondary" />
    },
    {
        title: "Community Engagement",
        description: "Empowering ASHA workers and citizens to report issues and receive timely updates.",
        icon: <AwardIcon className="h-8 w-8 text-accent" />
    },
    {
        title: "Data Transparency",
        description: "Blockchain-secured data ensures integrity and public access to health information.",
        icon: <CheckCircleIcon className="h-8 w-8 text-success" />
    },
    {
        title: "Actionable Insights",
        description: "Visual dashboards and reports help officials make informed decisions quickly.",
        icon: <LayoutDashboardIcon className="h-8 w-8 text-warning" />
    },
    {
        title: "Multilingual Support",
        description: "Accessible in local languages to ensure inclusivity across Northeast India.",
        icon: <MessageSquareIcon className="h-8 w-8 text-error" />
    }
];

const FeatureHighlights: React.FC = () => {
    return (
        <div className="py-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                    Powerful Features for Better Health Outcomes
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                <p className="mt-6 text-base-content/80 max-w-3xl mx-auto text-lg">
                    Our platform combines cutting-edge technology with community-driven reporting to create a comprehensive water health monitoring system.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <Card className="h-full">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 p-4 rounded-full bg-base-200">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-base-content">
                                    {feature.title}
                                </h3>
                                <p className="text-base-content/70">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeatureHighlights;