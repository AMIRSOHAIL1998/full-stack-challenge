import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute: React.FC<{ children: React.ReactNode; flag?: string }> = ({
  children,
  flag,
}) => {
  const { token, id } = useSelector((state: any) => state.auth);
  // If no token exists, redirect to /auth page
  const url = flag === 'client' ? `/users/${id}` : '/';
  if (token || token.length > 0) {
    return <Navigate to={url} replace={true} />;
  }
  return <>{children}</>;
};

export default PublicRoute;
