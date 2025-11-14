import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div 
                        className="bg-base-200 rounded-2xl shadow-modal w-full max-w-md m-4 gradient-border"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, y: -50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: -50 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="flex justify-between items-center p-4 border-b border-base-100 bg-gradient-to-r from-base-200 to-base-300 rounded-t-2xl">
                            <h2 className="text-2xl font-bold text-base-content">{title}</h2>
                            <button 
                                onClick={onClose} 
                                className="text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-base-300"
                            >
                                &times;
                            </button>
                        </div>
                        <motion.div 
                            className="p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;