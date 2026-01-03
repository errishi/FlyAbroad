import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import LoginButton from './LoginButton';
import CloseIcon from '@mui/icons-material/Close';

const LoginForm = ({ setCurrentAuth }) => {
    const [login, setLogin] = useState(false);

    return (
        <div className='w-full h-full z-10 fixed bg-[#000000ba] grid'>
            <div className='flex lg:flex-row md:flex-row flex-col lg:m-auto md:mx-10 mx-5 shadow-xl rounded-2xl w-fit overflow-clip lg:top-[10%] lg:left-1/6 top-3 md:top-10 place-self-center'>
                <img src="/login-student.jpg" className='lg:w-120 md:w-120 w-auto lg:block md:block hidden' alt="student" />
                {/* <img src="/login-student-full.jpg" className='lg:w-120 md:w-120 w-auto lg:hidden md:hidden block' alt="student" /> */}
                <div className='bg-white lg:w-130 md:w-130 w-full p-10 relative'>
                    <div className='flex justify-evenly border-b-2 lg:w-80 md:w-80 w-auto m-auto pb-3 mb-10'>
                        {login ? <h1 onClick={() => setLogin(true)} className='lg:text-2xl md:text-2xl text-xl text-[#FD661F] cursor-pointer hover:bg-[#09585e] px-3 py-1 rounded-md'>Login</h1> :
                            <h1 onClick={() => setLogin(true)} className='lg:text-2xl md:text-2xl text-xl cursor-pointer text-black hover:text-white hover:bg-[#09585e] px-3 py-1 rounded-md'>Login</h1>
                        }
                        {login ? <h1 onClick={() => setLogin(false)} className='lg:text-2xl md:text-2xl text-xl cursor-pointer text-black hover:text-white hover:bg-[#09585e] px-3 py-1 rounded-md'>Signup</h1> :
                            <h1 onClick={() => setLogin(false)} className='lg:text-2xl md:text-2xl text-xl cursor-pointer text-[#FD661F] hover:bg-[#09585e] px-3 py-1 rounded-md'>Signup</h1>
                        }
                    </div>
                    <form className='lg:mx-10 flex flex-col gap-5'>
                        {login ? <></> : <TextField fullWidth id="outlined-basic" color='white' label="Enter Name" variant="outlined" />}
                        <TextField fullWidth id="outlined-basic" color='white' label="Email Address" variant="outlined" />
                        <TextField fullWidth id="outlined-basic" color='white' label="Enter Password" variant="outlined" />
                        {/* ------button------ */}
                        {login ? <LoginButton name={"Login"} /> : <LoginButton name={"Signup"} />}
                        <div className='text-center text-black'>
                            {login ? (<p className='text-[14px]'>Don't have an account ? &nbsp; <span onClick={() => setLogin(false)} className='text-[18px] cursor-pointer underline text-orange-600'>Signup</span> </p>) : (<p className='text-[14px]'>Already have an account ? &nbsp; <span onClick={() => setLogin(true)} className='text-[18px] cursor-pointer underline text-orange-600'>Login</span> </p>)}
                        </div>
                    </form>
                    <div onClick={() => setCurrentAuth(false)} className='border-2 border-black w-fit h-8.5 flex items-center rounded-full p-1 cursor-pointer absolute lg:top-5 md:top-5 top-5 lg:right-5 md:right-5 right-5 hover:opacity-65'>
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;