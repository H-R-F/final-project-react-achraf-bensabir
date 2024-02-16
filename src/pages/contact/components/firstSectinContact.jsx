import React, { useState } from 'react';
import image1 from "../../../assets/img/about_top.jpg"
import "./firstsSection.scss"


export const FirstSection = () => {
    const [value, setValue] = useState()

    return (
        <section className='pt-16'> 
            <div className='h-[38vh] flex justify-center items-center text-white' style={{ backgroundImage: `url(${image1})` }}>
                <h1 className='text-8xl font-extrabold'>CONTACT</h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-around items-center lg:gap-0 gap-3  p-10'>
                <iframe className='lg:rounded-md w-[90vw] h-[80vh] lg:w-[50vw] lg:h-[80vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212753.67440117247!2d-7.751805827694918!3d33.572178282583415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1707912039810!5m2!1sfr!2sma"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-semiboldbold'>Send us your message</h1>
                <input className='border lg:w-[40vw] p-3 rounded-sm outline-none' type="text" placeholder='Name' />
                <input className='border lg:w-[40vw] p-3 rÆÆÆæææææounded-sm outline-none' type="email" placeholder='Email' />
                <input className='border lg:w-[40vw] p-3 rounded-sm outline-none' type="number" placeholder='Phone' />
                <textarea className='resize-none border  lg:w-[40vw] h-[20vh] p-3 rounded-sm outline-none' name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
                <button className='bg-gray-800 lg:w-[13vw] py-3 rounded-full font-bold text-white'>SEND</button>
                </div>
            </div>
        </section >
    );
};

