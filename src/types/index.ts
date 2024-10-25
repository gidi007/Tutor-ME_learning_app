export interface User {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'student' | 'tutor';
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType;
}