import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
    return (
        <div className="py-16">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-primary-content">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Transform Water Health Monitoring?
                            </h2>
                            <p className="text-lg mb-6 opacity-90">
                                Join thousands of health workers and officials using Wellness Wave to protect communities across Northeast India.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="ghost" size="lg" className="bg-white text-primary hover:bg-base-100">
                                    Get Started Today
                                </Button>
                                <Button variant="ghost" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                                    Request a Demo
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
                                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/20 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold">500+</div>
                                            <div className="text-sm opacity-80">Active Users</div>
                                        </div>
                                        <div className="bg-white/20 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold">50+</div>
                                            <div className="text-sm opacity-80">Districts Covered</div>
                                        </div>
                                        <div className="bg-white/20 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold">98%</div>
                                            <div className="text-sm opacity-80">Accuracy Rate</div>
                                        </div>
                                        <div className="bg-white/20 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold">24/7</div>
                                            <div className="text-sm opacity-80">Monitoring</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;