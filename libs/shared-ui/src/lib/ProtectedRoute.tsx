import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { token } = useSelector((state: any) => state.auth);

  // If no token exists, redirect to /auth page
  if (!token || token.length === 0) {
    return <Navigate to="/auth" replace={true} />;
  }

  // If token exists, render the children
  return <>{children}</>;
};

export default ProtectedRoute;
