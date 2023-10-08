import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

import {useAuth} from '../../shared/services/auth/hooks';

export interface RequireAuthProps {
  children: React.ReactNode,
}

// @ts-ignore
const RequireAuth: React.FC<RequireAuthProps> = ({
  children
}) => {
  const expired = useAuth();
  const location = useLocation();

  if (expired) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
