import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, icon }) => {
    return (
        <motion.div 
            className={`bg-base-300 rounded-2xl shadow-card overflow-hidden card-hover gradient-border ${className}`}
            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            transition={{ duration: 0.3 }}
        >
            {title && (
                <div className="p-6 border-b border-base-100 flex items-center space-x-4 bg-gradient-to-r from-base-200 to-base-300">
                    {icon && <div className="text-primary">{icon}</div>}
                    <motion.h3 
                        className="text-2xl font-bold text-base-content"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {title}
                    </motion.h3>
                </div>
            )}
            <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Card;