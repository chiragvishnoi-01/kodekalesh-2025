import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import PublicDashboard from './components/dashboards/PublicDashboard';
import UserDashboard from './components/dashboards/UserDashboard';
import AshaDashboard from './components/dashboards/AshaDashboard';
import OfficialDashboard from './components/dashboards/OfficialDashboard';
import { UserRole } from './types';
import Footer from './components/layout/Footer';
import { AlertsProvider } from './context/AlertsContext';
import { DataProvider } from './context/DataContext';
import PageTransition from './components/ui/PageTransition';

const AppContent: React.FC = () => {
    const { user } = useAuth();

    const renderDashboard = () => {
        if (!user) {
            return <PublicDashboard />;
        }
        switch (user.role) {
            case UserRole.USER:
                return <UserDashboard />;
            case UserRole.ASHA_WORKER:
                return <AshaDashboard />;
            case UserRole.OFFICIAL:
                return <OfficialDashboard />;
            default:
                return <PublicDashboard />;
        }
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 text-base-content flex flex-col">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
                <PageTransition>
                    {renderDashboard()}
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AlertsProvider>
          <DataProvider>
            <AppContent />
          </DataProvider>
        </AlertsProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;