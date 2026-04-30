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
        <div className='bg-[#0B585C] text-white p-8'>
            <div className='flex justify-between lg:flex-row md:flex-row flex-col items-start lg:items-start md:items-start'>
                <div className='lg:w-[36%] md:w-[30%] w-full mb-6 lg:mb-0'>
                    <img src="/logo.svg" className='lg:w-[230px] w-[150px] mb-4' alt="company logo" />
                    <p className='text-[#E6F6F6] text-[14px] lg:text-[17px]'>Unlock a borderless future with <b>UneFly</b>. We transform your global education dreams into reality through personalized mentorship and expert resources, serving as your trusted partner for international success.</p>
                </div>
                <div className='flex justify-between gap-6 lg:gap-0 lg:flex-row md:flex-row flex-col w-full py-5'>
                    <div className='w-fit lg:mr-6 lg:ml-12'>
                        <h3 className='text-xl font-medium my-4 text-white'>Quick Links</h3>
                        <ul className='gap-3 flex flex-col'>
                            <Link to={"/about"}>
                                <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>About UneFly</li>
                            </Link>
                            <Link to={"/career"}>
                                <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Careers</li>
                            </Link>
                            <Link to={"/apply"}>
                                <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Apply Now</li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='w-fit lg:mx-6'>
                        <h3 className='text-xl font-medium my-4 text-white'>Study Destinations</h3>
                        <ul className='gap-3 flex flex-col'>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in Russia</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in UK</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in USA</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in Canada</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in Germany</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in Ireland</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in Newzealand</li>
                            <li className='hover:text-[#FD661F] text-[#E6F6F6] transition-colors cursor-pointer'>Study in Australia</li>
                        </ul>
                    </div>
                    <div className='w-fit lg:ml-6'>
                        <h3 className='text-xl font-medium my-4 text-white'>Contact Us</h3>
                        <ul className='gap-3 flex flex-col w-80'>
                            <li className='hover:text-[#FD661F] flex gap-3 items-center text-[#E6F6F6] transition-colors cursor-pointer'>
                                <MailOutlineIcon className='text-white' />
                                <p className='text-[#E6F6F6]'>info@unefly.com</p>
                            </li>
                            <li className='hover:text-[#FD661F] flex gap-3 items-center text-[#E6F6F6] transition-colors cursor-pointer'>
                                <LocalPhoneIcon className='text-white' />
                                <p className='text-[#E6F6F6]'>+7 (925) 349-03-20</p>
                            </li>
                            <li className='hover:text-[#FD661F] flex gap-3 items-center text-[#E6F6F6] transition-colors cursor-pointer'>
                                <LocationPinIcon className='text-white' />
                                <p className='text-[#E6F6F6]'>Millionschikova Street, Dom13K1. Moscow - Russia</p>
                            </li>
                        </ul>
                        <div className='pt-6'>
                            <ul id='social-media' className='flex gap-4 items-center'>
                                <Link to='https://www.instagram.com/uneflydotcom/' id='instagram' target='_blank' rel='noreferrer' className='cursor-pointer transition-colors text-white hover:text-[#FD661F]'> <InstagramIcon /> </Link>
                                <a href='https://www.facebook.com' id='facebook' className='cursor-pointer transition-colors text-white hover:text-[#FD661F]' target='_blank' rel='noreferrer'> <FacebookIcon /> </a>
                                <a href='https://twitter.com' id='Xicon' className='cursor-pointer transition-colors text-white hover:text-[#FD661F]' target='_blank' rel='noreferrer'> <XIcon /> </a>
                                <a href='https://www.youtube.com' id='youtube' className='cursor-pointer transition-colors text-white hover:text-[#FD661F]' target='_blank' rel='noreferrer'> <YouTubeIcon /> </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-white/20 my-7' />
            <div className='flex justify-center lg:flex-row md:flex-row flex-col text-center lg:text-start md:text-start'>
                <div>
                    <p className='text-white/80 text-[14px]'> &copy; {new Date().getFullYear()} <Link to='/' className='text-white/90'>UneFly</Link>. All rights reserved. </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;