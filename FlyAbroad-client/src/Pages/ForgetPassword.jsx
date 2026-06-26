import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:8080/user/forgot-password", { email });

      if (res.data.success) {
        toast.success(res.data.message);
        setIsSubmitted(true);
        const emailToVerify = email;
        setEmail("");
        navigate(`/verify-otp/${encodeURIComponent(emailToVerify)}`);
        setError(null);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-teal-600">Reset Your Password</h1>
          <p className="text-gray-600">
            Enter your email address and we’ll send you instructions to reset your password.
          </p>
        </div>

        {/* Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-teal-600">Forgot Password</CardTitle>
            <CardDescription className="text-center">
              {isSubmitted
                ? "Check your email for reset instructions"
                : "Enter your email to receive a password reset link"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Success State */}
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center space-y-4 py-6">
                <div className="bg-teal-100 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Check your inbox</h3>
                  <p className="text-gray-600">
                    We’ve sent a password reset link to{" "}
                    <span className="font-medium">{email}</span>.
                  </p>
                  <p>If you don’t see the email, check your spam folder.</p>
                  <button
                    className="text-teal-600 hover:underline font-medium"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send again
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-[3px]">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white py-2 rounded-md hover:from-teal-600 hover:to-orange-600 transition-colors flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending reset link...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </button>
              </form>
            )}
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-gray-700">
              Remember your password?{" "}
              <Link to="/login" className="text-teal-600 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-xs text-gray-500">
          <p>If you’re still having trouble, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
