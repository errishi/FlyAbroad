import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react'
import LoginButton from './LoginButton';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import * as motion from "motion/react-client"

const LoginForm = ({ setCurrentAuth, currentAuth }) => {
    const [login, setLogin] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            height: 44,
            borderRadius: '999px',
            backgroundColor: '#fff',
            '& fieldset': {
                borderColor: '#E5E7EB',
            },
            '&:hover fieldset': {
                borderColor: '#C7D2D9',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0B7077',
            },
        },
        '& .MuiInputBase-input': {
            fontSize: '14px',
        },
        '& .MuiInputLabel-root': {
            fontSize: '14px',
            color: '#8A8F98',
        },
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2 py-2 sm:px-4 sm:py-4'>
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isClosing ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onAnimationComplete={() => { if (isClosing) setCurrentAuth(false); }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className='relative flex w-full max-w-[96vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[95vh] sm:max-w-6xl lg:flex-row'>
                <div className='hidden lg:block relative h-[28vh] sm:h-[34vh] md:h-[40vh] lg:h-full lg:min-h-full lg:w-[52%] overflow-hidden'>
                    <img src='/login-student.jpg' className='hidden lg:block absolute inset-0 h-full w-full object-cover' alt='student' />
                    <div className='hidden lg:block absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-black/10' />
                    <div className='absolute inset-0 flex items-center justify-start p-5 sm:p-8 lg:p-10'>
                        <h2 className='max-w-md text-left text-2xl font-extrabold leading-[1.05] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[64px]'>
                            Your global future starts here.
                        </h2>
                    </div>
                </div>

                <div className='relative flex w-full flex-col justify-center min-h-0 overflow-auto lg:overflow-visible bg-white px-4 py-6 sm:px-8 sm:py-8 lg:w-[48%] lg:px-14 lg:py-10 pr-4 lg:pr-0'>
                    <div className='absolute right-3 top-3 sm:right-5 sm:top-5'>
                        <button
                            type='button'
                            onClick={() => setIsClosing(true)}
                            className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black/5'
                            aria-label='Close login form'
                        >
                            <CloseIcon fontSize='small' />
                        </button>
                    </div>

                    <div className='mx-auto w-full max-w-105'>
                        {login ? <h1 className='mb-6 text-center text-2xl font-extrabold text-[#0f3d46] sm:text-[34px] lg:text-left'>Create an account</h1> :
                            <h1 className='mb-6 text-center text-2xl font-extrabold text-[#0f3d46] sm:text-[34px] lg:text-left'>Log In</h1>
                        }

                        <form className='flex flex-col gap-4 sm:gap-5'>
                            {login ? (
                                <TextField
                                    fullWidth
                                    id='outlined-name'
                                    label='Full Name'
                                    variant='outlined'
                                    sx={inputSx}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <WorkOutlineIcon fontSize='small' />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            ) : null}
                            <TextField
                                fullWidth
                                id='outlined-email'
                                label='Email Address'
                                variant='outlined'
                                sx={inputSx}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <MailOutlineIcon fontSize='small' />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                id='outlined-password'
                                label='Password'
                                type='password'
                                variant='outlined'
                                sx={inputSx}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <LockOutlinedIcon fontSize='small' />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <div className='-mt-1 flex justify-end'>
                                <button type='button' className='text-sm font-semibold text-[#0B7077] transition hover:text-[#FD661F]'>Forgot Password?</button>
                            </div>

                            {/* ------button------ */}
                            {login ? <LoginButton name={"Sign Up"} /> : <LoginButton name={"Login"} />}

                            <div className='my-1 flex items-center gap-3 sm:gap-4'>
                                <span className='h-px flex-1 bg-gray-200' />
                                {login ?
                                <span className='whitespace-nowrap text-sm text-gray-500'>Or Sign Up with</span>
                                :
                                <span className='whitespace-nowrap text-sm text-gray-500'>Or log in with</span>
                                }
                                <span className='h-px flex-1 bg-gray-200' />
                            </div>

                            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                                <button type='button' className='flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50'>
                                    <GoogleIcon fontSize='small' />
                                    Google
                                </button>
                                <button type='button' className='flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50'>
                                    <LinkedInIcon fontSize='small' />
                                    LinkedIn
                                </button>
                            </div>

                            <div className='flex items-center justify-center gap-2 pt-2 text-sm font-medium text-gray-600'>
                                {login ?
                                    <>
                                        <span>Already have an account?</span>
                                        <button type='button' onClick={() => setLogin(!login)} className='font-semibold cursor-pointer text-[#0B7077] hover:underline'>Login</button>
                                    </>
                                    :
                                    <>
                                        <span>Don't have an account?</span>
                                        <button type='button' onClick={() => setLogin(!login)} className='font-semibold cursor-pointer text-[#0B7077] hover:underline'>Sign Up</button>
                                    </>

                                }
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginForm;