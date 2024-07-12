import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const PrivateRouts = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRouts;
