import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Verify = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [status, setStatus] = useState('Verifying...')

    useEffect(() => {
        const verify = async () => {
            try {
                const res = await axios.post('http://localhost:8080/user/verify', {}, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                if (res.data && res.data.success) {
                    setStatus('Verification Successful. You can now log in.')
                    setTimeout(() => navigate('/login'), 3000)
                } else {
                    setStatus('Verification Failed. Please try again.')
                }
            } catch (error) {
                console.log(error)
                setStatus('Verification Failed. Please try again.')
            }
        };
        verify()

    },[token, navigate])


    return (
        <div className='relative w-full h-190 bg-[#F5F5F5] flex justify-center items-center'>
            <div className='min-h-screen flex items-center justify-center'>
                <div className='bg-white p-6 rounded-xl shadow-md text-center'>
                    <h2 className='text-2xl font-bold mb-4'>Verify Your Account</h2>
                    <p className='text-gray-600 mb-6'>{status}</p>
                    <img src='/VerifyEmail-image.svg' alt='Verify Email' className='w-60 h-auto mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default Verify