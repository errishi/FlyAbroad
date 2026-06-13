import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { CheckCircle, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'


const ForgetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    // removed unused getData / setUser


    const handleForgotPassword = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const res = await axios.post(`http://localhost:8080/user/forgot-password`, {email

            });
            if(res.data.success){
                toast.success(res.data.message)
                setIsSubmitted(true)
                setEmail("")
                navigate(`/verify-otp/${email}`)
                setError(null)
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || error.message)
            
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="relative w-full `h-190` bg-yellow-400 overflow-hidden">
            <div className="min-h-screen flex items-center justify-center">
                {/* Main content */}
                <div className="flex-1 flex justify-center p-4 sm:p-6 lg:p-8">
                    <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-lg shadow-lg">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight text-green-600">
                                Reset your password
                            </h1>
                            <p className="text-gray-600">
                                Enter your Email Address and we will send you instructions to
                                reset your password
                            </p>
                            <Card className="bg-white">
                                <CardHeader className="space-y-1"></CardHeader>
                                <CardTitle className="text-2xl text-green-600">
                                    Forgot Password
                                </CardTitle>
                                <CardDescription className="text-center">
                                    {isSubmitted
                                        ? "Check your Email for Reset instruction"
                                        : "Enter your email to receive a password reset link"}
                                </CardDescription>
                                <CardContent className="space-y-4">
                                    {error && (
                                        <Alert variant="destructive">
                                            <AlertDescription>{error}</AlertDescription>
                                        </Alert>
                                    )}
                                    {isSubmitted ? (
                                        <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
                                            <div className="bg-primary/10 rounded-full p-3">
                                                <CheckCircle className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className='spacey2 '>
                                                <h3 className='font-medium text-lg'>Check your inbox</h3>
                                                <p className='text-muted-foreground'>We have sent a password reset link<span className='font-medium text-foreground'>{email}</span></p>
                                                <p className=''>If you don't see your email, check your spam folder or{""}</p>
                                                <button className='text-primary hover:underline font-medium' onClick={() => setIsSubmitted(false)}>Send again</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleForgotPassword} className='space-y-4'>
                                            <div className='space-y-2 relative text-gray-800'>
                                                <label className=''>Email
                                                </label>
                                                <Input
                                                    type='email'
                                                    placeholder='enter your email address here'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    disabled={isLoading}

                                                />
                                            </div>
                                            <button type='submit' className='w-full bg-green-600 text-white relative hover:bg-green-500 cursor-pointer'>
                                                {
                                                    isLoading ? (
                                                        <>
                                                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />Sending reset link...
                                                        </>
                                                    ) : ("Send reset link")

                                                }
                                            </button>
                                        </form>
                                    )
                                    }
                                </CardContent>
                                <CardFooter className='flex justify-center'>
                                    <p className=''> Remember your Password?{" "}
                                        <Link to={'/login'} className='text-green-600 hover:underline font-medium relative'>Sign in</Link>
                                    </p>
                                </CardFooter>
                            </Card>
                            <div className='text-center text-xs text-mutted-foreground'>
                                <p>
                                    If you are still having trouble in any step, please contact {" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
