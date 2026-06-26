import React, { useState, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Alert, AlertDescription } from '@/Components/ui/alert'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { CheckCircle, Loader2 } from 'lucide-react'

const VerifyOTP = () => {
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)

  const inputRefs = useRef([])
  const { email } = useParams()
  const navigate = useNavigate()

  const handleChange = (index, value) => {
    if (value.length > 1) return
    const updatedOtp = [...otp]
    updatedOtp[index] = value
    setOtp(updatedOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleVerify = async () => {
    const finalOtp = otp.join("")
    if (finalOtp.length !== 6) {
      setError("Please enter all 6 digits")
      return
    }

    try {
      setIsLoading(true)
      const res = await axios.post(`http://localhost:8080/user/verify-otp/${email}`, { otp: finalOtp })
      setSuccessMessage(res.data.message)
      setIsVerified(true)

      setTimeout(() => {
        navigate(`/change-password/${email}`)
      }, 2000)
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const clearOtp = () => {
    setOtp(["", "", "", "", "", ""])
    setError("")
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 p-6">
      <Card className="w-full max-w-md shadow-xl border border-teal-200">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold text-teal-700">Verify Your Email</CardTitle>
          <CardDescription className="text-gray-600">
            We’ve sent a 6-digit verification code to <span className="font-medium">{email}</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {successMessage && (
            <p className="text-teal-600 text-sm text-center font-medium">{successMessage}</p>
          )}

          {isVerified ? (
            <div className="flex flex-col items-center space-y-4 py-6">
              <div className="bg-teal-100 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold">Verification Successful</h3>
              <p className="text-gray-500 text-sm">
                Your email has been verified. Redirecting to reset your password...
              </p>
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
                <span className="text-sm text-gray-500">Redirecting...</span>
              </div>
            </div>
          ) : (
            <>
              {/* OTP Input */}
              <div className="flex justify-between mb-6">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleChange(index, e.target.value)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 text-center text-xl font-bold border-teal-300 focus:ring-teal-500"
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  disabled={isLoading || otp.some((digit) => digit === "")}
                  onClick={handleVerify}
                  className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white py-2 rounded-lg flex justify-center items-center transition-colors hover:from-teal-600 hover:to-orange-600"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                    </>
                  ) : (
                    "Verify Code"
                  )}
                </button>

                <button
                  onClick={clearOtp}
                  disabled={isLoading || isVerified}
                  className="w-full border border-teal-600 text-teal-600 py-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-orange-50 transition-colors"
                >
                  Clear Code
                </button>
              </div>
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Wrong email?{" "}
            <Link to="/forget-password" className="text-teal-600 hover:underline font-medium">
              Go Back
            </Link>
          </p>
        </CardFooter>
      </Card>

      <div className="absolute bottom-4 text-center text-xs text-gray-400">
        For testing purposes, use code: <span className="font-mono font-medium">123456</span>
      </div>
    </div>
  )
}

export default VerifyOTP
