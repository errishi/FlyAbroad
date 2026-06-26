import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuthRedirect = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get('token');
    if (token) {
      // store token (you may prefer cookies)
      localStorage.setItem('accessToken', token);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [search, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Signing you in...</h2>
        <p className="text-gray-600">Finishing authentication — redirecting shortly.</p>
      </div>
    </div>
  );
};

export default OAuthRedirect;
