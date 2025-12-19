import TextField from '@mui/material/TextField';
import React from 'react'
import LoginButton from './LoginButton';

const LoginForm = () => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col lg:m-auto mx-10 shadow-xl w-fit m-auto rounded-2xl overflow-clip text-white lg:top-[10%] lg:left-1/6 top-3 md:top-10 z-10 fixed'>
            <img src="/login-student.jpg" className='lg:w-120 md:w-120 w-auto' alt="student" />
            <div className='bg-[#1f9aa3ee] lg:w-130 md:w-130 w-full p-10'>
                <div className='flex justify-evenly border-b-2 lg:w-80 md:w-80 w-auto m-auto pb-3 mb-10'>
                    <h1 className='lg:text-2xl md:text-2xl text-xl'>Login</h1>
                    <h1 className='lg:text-2xl md:text-2xl text-xl'>Signup</h1>
                </div>
                <form className='lg:mx-10 flex flex-col gap-5'>
                    <TextField fullWidth id="outlined-basic" color='white' label="Enter Name" variant="outlined" />
                    <TextField fullWidth id="outlined-basic" color='white' label="Email Address" variant="outlined" />
                    <TextField fullWidth id="outlined-basic" color='white' label="Enter Password" variant="outlined" />
                    <LoginButton name={"Login"} />
                    <div className='text-center'>
                        <p className='text-[14px]'>Don't have an account ? &nbsp;<span className='text-[18px] cursor-pointer underline text-orange-600'>signup</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;