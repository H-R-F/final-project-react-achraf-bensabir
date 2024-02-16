import React from 'react';
import { FaFacebookF, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter, FaGooglePlusG, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';





export const Footer = () => {
    return (
        <footer className='bg-gray-300 flex flex-col justify-between lg:p-11 p-3 gap-y-24'>
            <div className='flex flex-col lg:flex-row justify-between lg:gap-x-4 gap-4'>
                <div className='lg:w-[32vw]'>
                    <h1 className='font-bold text-xl lg:mb-5 '>GET IN TOUCH</h1>
                    <p className='text-blue-gray-900 lg:mb-5'>
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                    </p>
                    <div className='flex justify-between w-40 text-2xl'>
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaPinterestSquare />
                        <FaGooglePlusG />
                        <FaInstagram />
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl lg:mb-5'>CATEGORIES</h1>
                    <div className='flex flex-col text-gray-400 gap-y-2'>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Men</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Women</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Dresses</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Sunglasses</Link>
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl lg:mb-5'>Links</h1>
                    <div className='flex flex-col text-gray-400 gap-y-2'>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Search</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>About Us</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Contact Us</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Returns</Link>
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl lg:mb-5'>Help</h1>
                    <div className='flex flex-col text-gray-400 gap-y-2'>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Track Order</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Returns</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>Shipping</Link>
                        <Link to={"/"} className='no-underline text-blue-gray-900'>FAQs</Link>
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <h1 className='font-bold text-xl lg:mb-5'>NEWSLETTER</h1>
                    <input type="email" placeholder='Email Address' className='outline-none border-b bg-transparent border-gray-900 bg-slate-100 lg:w-[20vw] pl-2 lg:mb-5 mb-4' />
                    <Link to={"/"} className='no-underline text-blue-gray-900'><button className='bg-gray-900 text-white px-10 py-2 rounded-full'>
                        SUBSCRIBE
                    </button></Link>
                </div>
            </div>
            <h1 className='font-semibold text-center text-gray-500 text-sm'>
                <span className='text-gray-400 text-sm'>Copyright © 2022</span> Shopify Theme Developed by MassTechnologist <span className='text-gray-400 text-sm '> All rights reserved</span>.
            </h1>
        </footer>
    );
};

