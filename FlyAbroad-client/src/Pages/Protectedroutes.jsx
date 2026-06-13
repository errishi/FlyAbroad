import React from 'react';
import { Navigate } from 'react-router-dom';
import { getData } from '@/Context/UserContext';

const ProtectedRoutes = ({ children }) => {
  const { user } = getData(); // call the function, not just reference it

  return (
    <>
      {user ? children : <Navigate to="/login" />}
    </>
  );
};

export default ProtectedRoutes;
