import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../auth/LoginModal';
import Button from '../ui/Button';
import { BellIcon, LoginIcon, LogoutIcon, TranslateIcon, WaterDropIcon } from '../ui/Icons';
import { Alert, RiskLevel } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { LANGUAGES } from '../../i18n';
import { useAlerts } from '../../context/AlertsContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const { t } = useTranslation();
    const { language, setLanguage } = useLanguage();
    const { alerts } = useAlerts();
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isAlertsOpen, setAlertsOpen] = useState(false);

    const riskColorMap: Record<RiskLevel, string> = {
        [RiskLevel.HIGH]: 'text-error',
        [RiskLevel.MEDIUM]: 'text-warning',
        [RiskLevel.LOW]: 'text-success',
    };

    return (
        <>
            <nav className="glass-effect shadow-xl sticky top-0 z-50 border-b border-base-300 backdrop-blur-lg bg-opacity-90">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                           <motion.div
                             whileHover={{ rotate: 15, scale: 1.1 }}
                             transition={{ type: "spring", stiffness: 300 }}
                             className="flex items-center"
                           >
                             <WaterDropIcon className="h-8 w-8 text-primary animate-float"/>
                           </motion.div>
                            <motion.span 
                              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              Wellness Wave
                            </motion.span>
                        </div>
                        <div className="flex items-center space-x-2 md:space-x-4">
                            <div className="relative">
                                <motion.button
                                    onClick={() => setAlertsOpen(!isAlertsOpen)}
                                    className="p-2 rounded-full text-gray-600 hover:bg-base-300 hover:text-primary transition-all duration-300 glass-effect shadow-sm"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <BellIcon className="h-6 w-6" />
                                    {alerts.length > 0 && (
                                        <motion.span 
                                            className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-error ring-2 ring-base-100 animate-pulse"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                                <AnimatePresence>
                                    {isAlertsOpen && (
                                        <motion.div 
                                            className="absolute right-0 mt-2 w-80 md:w-96 bg-base-100 rounded-2xl shadow-2xl p-4 z-50 border border-base-300 max-h-96 overflow-hidden"
                                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="font-bold text-lg text-base-content">{t('notifications')}</h3>
                                                <span className="bg-primary text-primary-content text-xs font-bold rounded-full px-2 py-1">
                                                    {alerts.length}
                                                </span>
                                            </div>
                                            <div className="max-h-80 overflow-y-auto custom-scrollbar">
                                                {alerts.length > 0 ? (
                                                    <ul className="space-y-3">
                                                      {alerts.map((alert: Alert) => (
                                                        <motion.li 
                                                            key={alert.id} 
                                                            className={`p-3 rounded-xl bg-base-200 border-l-4 ${riskColorMap[alert.riskLevel].replace('text-', 'border-')} card-hover shadow-sm`}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            whileHover={{ x: 5 }}
                                                        >
                                                          <div className="flex justify-between">
                                                            <p className={`font-semibold ${riskColorMap[alert.riskLevel]}`}>{alert.title}</p>
                                                            <span className="text-xs text-base-content/60">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                                          </div>
                                                          <p className="text-sm text-base-content/80 mt-1">{alert.description}</p>
                                                          <p className="text-xs text-base-content/60 mt-2 font-medium flex items-center">
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                            </svg>
                                                            {alert.location}
                                                          </p>
                                                        </motion.li>
                                                      ))}
                                                    </ul>
                                                ) : (
                                                    <div className="text-center py-8 text-base-content/60">
                                                        <BellIcon className="h-12 w-12 mx-auto text-base-content/30" />
                                                        <p className="mt-2">{t('no_notifications')}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                           
                             <div className="relative hidden md:block">
                                <TranslateIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                                <motion.select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="pl-10 pr-8 py-2 appearance-none bg-base-200 border border-transparent rounded-full text-gray-600 hover:bg-base-300 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary glass-effect shadow-sm"
                                    aria-label="Select language"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {Object.entries(LANGUAGES).map(([code, name]) => (
                                        <option key={code} value={code}>{name}</option>
                                    ))}
                                </motion.select>
                            </div>

                            {user ? (
                                <div className="flex items-center space-x-3">
                                    <div className="hidden md:flex items-center space-x-2 bg-base-200 rounded-full py-1 px-3 glass-effect">
                                        <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-primary-content font-bold">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm max-w-[100px] truncate">{user.name}</span>
                                    </div>
                                    <Button 
                                        onClick={logout} 
                                        variant="ghost" 
                                        size="sm"
                                        className="flex items-center"
                                    >
                                        <LogoutIcon className="h-5 w-5" />
                                        <span className="hidden md:inline ml-2">{t('logout')}</span>
                                    </Button>
                                </div>
                            ) : (
                                <Button 
                                    onClick={() => setLoginModalOpen(true)} 
                                    variant="primary" 
                                    size="sm"
                                    className="flex items-center"
                                >
                                    <LoginIcon className="h-5 w-5" />
                                    <span className="hidden md:inline ml-2">{t('login')}</span>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
        </>
    );
};

export default Navbar;