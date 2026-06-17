import UserContext from '@/Context/UserContext';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext); // call the function, not just reference it

  return (
    <>
      {user ? children : <Navigate to="/login" />}
    </>
  );
};

export default ProtectedRoutes;
