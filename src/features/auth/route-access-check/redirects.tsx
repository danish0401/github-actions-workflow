import { Navigate, useLocation } from 'react-router-dom';

export function RedirectToLogin() {
  const location = useLocation();

  return <Navigate to='/login' state={{ from: location }} replace />;
}

export function RedirectTo403() {
  return <Navigate to={'/forbidden'} replace />;
}
