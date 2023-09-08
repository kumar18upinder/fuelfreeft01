import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  if (localStorage.getItem('token')) {
    const isAuthenticated = !!localStorage.getItem('token')
    
    return isAuthenticated ? <Outlet /> : null; // or loading indicator, etc...
  }
  return <Navigate to={"/login"} replace />;
};
export default AuthLayout