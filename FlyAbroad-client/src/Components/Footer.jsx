import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#0B7077]/25 p-8'>
            <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center'>
            <div className='lg:w-[40%] md:w-[30%] w-full'>
                <img src="/FlyAbroad-new.svg" className='lg:w-[230px] w-[150px]' alt="company logo" />
                <p className='text-[#0B7077] text-[14px] lg:text-[17px]'>Unlock a borderless future with <b>FlyAbroad</b>. We transform your global education dreams into reality through personalized mentorship and expert resources, serving as your trusted partner for international success.</p>
            </div>
            <div className='flex justify-around gap-4 lg:gap-0 md:gap-0 lg:flex-row md:flex-row flex-col w-full py-5'>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>About Us</h3>
                    <ul className='gap-3 flex flex-col'>
                        <Link to={"/about"}>
                            <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>About FlyAbroad</li>
                        </Link>
                        <Link to={"/career"}>
                            <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Careers</li>
                        </Link>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Newsroom</li>
                        <Link to={"/contact"}>
                            <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>For Institutions</h3>
                    <ul className='gap-3 flex flex-col'>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Recruitment & Marketing</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Data & Insights</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Consulting</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Partner Assistance</li>
                    </ul>
                </div>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>Resources</h3>
                    <ul className='gap-3 flex flex-col'>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Guides & reports</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Articles</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Case Studies</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Events</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>All Resources</li>
                    </ul>
                </div>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>Legal</h3>
                    <ul className='gap-3 flex flex-col'>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Privacy & Policy</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Terms & Conditions</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Disclaimer</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Cookies</li>
                    </ul>
                </div>
            </div>
            </div>
            <hr className='text-gray-400 border my-7' />
            <div className='flex justify-between lg:flex-row md:flex-row flex-col'>
                <div>
                    <h2 className='font-semibold text-[#0A033C]'>Subscribe to our newsletter</h2>
                    <p className='text-[#0B7077] text-[14px] lg:text-[17px] w-full md:w-80 lg:w-full'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                </div>
                <div id='search-button' className='flex gap-5 mt-3 lg:mt-0 md:mt-0'>
                    <TextField id="standard-basic" label="Enter your email" variant="standard" />
                    <Button variant="contained">Submit</Button>
                </div>
            </div>
            <hr className='text-gray-400 border my-7' />
            <div className='flex justify-between lg:flex-row md:flex-row flex-col text-center lg:text-start md:text-start'>
                <div>
                    <p className='text-gray-700 text-[14px] mb-3'> &copy; {new Date().getFullYear()} FlyAbroad, Inc. All rights reserved. </p>
                </div>
                <div className='m-auto lg:m-0 md:m-0'>
                    <ul id='social-media' className='flex gap-4'>
                        <li id='instagram' className='cursor-pointer transition-all'> <InstagramIcon/> </li>
                        <li id='facebook' className='cursor-pointer transition-all'> <FacebookIcon/> </li>
                        <li id='Xicon' className='cursor-pointer transition-all'> <XIcon/> </li>
                        <li id='youtube' className='cursor-pointer transition-all'> <YouTubeIcon/> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;