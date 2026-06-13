import { Input } from '@headlessui/react'
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Loader2 } from 'lucide-react'

const ChangePassword = () => {
  const { email } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangePassword = async () => {
    setError("")
    setSuccess("")

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setIsLoading(true)
      const res = await axios.post(`http://localhost:8080/user/change-password/${email}`, {
        newPassword,
        confirmPassword,
      })
      setSuccess(res.data.message)
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-green-100 px-4'>
      <div className='bg-white shadow-md rounded-lg p-6 max-w-md w-full'>
        <h2 className='text-xl font-semibold flex justify-center mb-4'>Change Password</h2>
        <p className='text-sm text-gray-500 text-center mb-4'>
          Set a new password for <span className='font-semibold'>{email}</span>
        </p>
        {error && <p className='text-red-500 text-sm mb-3 text-center'>{error}</p>}
        {success && <p className='text-green-500 text-sm mb-3 text-center'>{success}</p>}
        <div className='space-y-4'>
          <Input
            type='password'
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
          />
          <Input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
          />
          <button
            type='button'
            onClick={handleChangePassword}
            className='w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-md transition'
            disabled={isLoading}
          >
            {isLoading ? (
              <span className='inline-flex items-center justify-center'>
                <Loader2 className='mr-2 w-4 h-4 animate-spin' />
                Changing
              </span>
            ) : (
              'Change Password'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
