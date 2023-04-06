import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserManagement, UserManagementSkeleton } from 'entities/user-management';
import { useAuth } from 'shared/providers/auth';

export const User: FC = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return <UserManagementSkeleton />;
  }

  return <UserManagement data={user} onLogout={handleLogout} />;
};
