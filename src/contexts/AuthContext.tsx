import React, { createContext, useContext, useState } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, role: User['role']) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: false,
  });

  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true }));
    try {
      // Simulate API call
      const user: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'parent',
        profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      };
      setAuthState({ user, isAuthenticated: true, loading: false });
    } catch (error) {
      setAuthState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false, loading: false });
  };

  const register = async (email: string, password: string, role: User['role']) => {
    setAuthState(prev => ({ ...prev, loading: true }));
    try {
      // Simulate API call
      const user: User = {
        id: '1',
        name: email.split('@')[0],
        email,
        role,
      };
      setAuthState({ user, isAuthenticated: true, loading: false });
    } catch (error) {
      setAuthState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}