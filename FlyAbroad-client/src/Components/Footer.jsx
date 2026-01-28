import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Footer = () => {
    return (
        <div className='bg-[#0B7077]/25 p-8'>
            <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center'>
            <div className='lg:w-[40%] md:w-[30%] w-full'>
                <img src="/logo.svg" className='lg:w-[230px] w-[150px]' alt="company logo" />
                <p className='text-[#0B7077] text-[14px] lg:text-[17px]'>Unlock a borderless future with <b>UneFly</b>. We transform your global education dreams into reality through personalized mentorship and expert resources, serving as your trusted partner for international success.</p>
            </div>
            <div className='flex justify-around gap-4 lg:gap-0 md:gap-0 lg:flex-row md:flex-row flex-col w-full py-5'>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>Quick Links</h3>
                    <ul className='gap-3 flex flex-col'>
                        <Link to={"/about"}>
                            <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>About UneFly</li>
                        </Link>
                        <Link to={"/career"}>
                            <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Careers</li>
                        </Link>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Apply Now</li>
                        <Link to={"/contact"}>
                            <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>Study Destinations</h3>
                    <ul className='gap-3 flex flex-col'>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in Russia</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in UK</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in USA</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in Canada</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in Germany</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in Ireland</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in Newzealand</li>
                        <li className='hover:text-[#FD661F] text-[#0B7077] transition-all cursor-pointer'>Study in Australia</li>
                    </ul>
                </div>
                <div className='w-fit'>
                    <h3 className='text-xl font-medium my-4 text-[#0A033C]'>Contact Us</h3>
                    <ul className='gap-3 flex flex-col w-70'>
                        <li className='hover:text-[#FD661F] flex gap-2 text-[#0B7077] transition-all cursor-pointer'>
                        <MailOutlineIcon />
                        <p>info@unefly.com</p>
                        </li>
                        <li className='hover:text-[#FD661F] flex gap-2 text-[#0B7077] transition-all cursor-pointer'>
                        <LocalPhoneIcon />
                        <p>+7 (925) 349-03-20</p>
                        </li>
                        <li className='hover:text-[#FD661F] flex gap-2 text-[#0B7077] transition-all cursor-pointer'>
                        <LocationPinIcon />
                        <p>Millionschikova Street, Dom13K1. Moscow - Russia</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <hr className='text-gray-400 border my-7' />
            <div className='flex justify-center lg:flex-row md:flex-row flex-col text-center lg:text-start md:text-start'>
                <div>
                    <p className='text-gray-700 text-[14px] mb-3'> &copy; {new Date().getFullYear()} UneFly. All rights reserved. </p>
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