// src/components/PrivateRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/auth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/" />;
  }
  return <>{children}</>; // Ensure you're returning a React element
};

export default PrivateRoute;
