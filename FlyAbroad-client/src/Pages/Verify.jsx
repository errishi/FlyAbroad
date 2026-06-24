import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Verify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('Verifying...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          'http://localhost:8080/user/verify',
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.success) {
          setStatus('✅ Verification Successful! Redirecting...');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setStatus('❌ Invalid or Expired Token');
        }
      } catch (error) {
        console.error(error);
        setStatus('❌ Verification Failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Email Verification</h2>
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
            <p className="text-gray-600">{status}</p>
          </div>
        ) : (
          <p className="text-gray-700 font-medium">{status}</p>
        )}
        <img
          src="/VerifyEmailImage.svg"
          alt="Verify Email"
          className="w-48 h-auto mx-auto mt-6"
        />
      </div>
    </div>
  );
};

export default Verify;
