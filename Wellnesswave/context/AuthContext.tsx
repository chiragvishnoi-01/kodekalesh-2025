
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, UserRole } from '../types';
import { authService } from '../src/services/authService';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
    signup: (name: string, email: string, password: string, role: UserRole) => Promise<{ success: boolean; message: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(authService.getCurrentUser());

    useEffect(() => {
        // Sync user state with localStorage on mount
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
    }, []);

    const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
        try {
            const userData = await authService.login(email, password);
            setUser(userData);
            return { success: true, message: 'Login successful' };
        } catch (error: any) {
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const signup = async (name: string, email: string, password: string, role: UserRole): Promise<{ success: boolean; message: string }> => {
        try {
            const userData = await authService.signup(name, email, password, role);
            setUser(userData);
            return { success: true, message: 'Signup successful' };
        } catch (error: any) {
            return { success: false, message: error.response?.data?.message || 'Signup failed' };
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
