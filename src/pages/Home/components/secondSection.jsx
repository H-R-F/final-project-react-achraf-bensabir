import React from 'react';
import image1 from "../../../assets/img/banner-01.jpg"
import image2 from "../../../assets/img/banner-02.jpg"
import image3 from "../../../assets/img/banner-03.jpg"
import image4 from "../../../assets/img/banner-04.jpg"
import image5 from "../../../assets/img/banner-05.jpg"
import image6 from "../../../assets/img/banner-07.jpg"
import image7 from "../../../assets/img/banner-09.jpg"

export const SecondSection = () => {
    return (
        <section className="mb-7">
            <div className='flex flex-col lg:flex-row justify-center p-4 gap-4'>
                <div className='flex flex-col gap-y-4'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500 ' src={image1} alt="image" />
                        <button className='cursor-pointer bg-gray-50 hover:bg-red-300 hover:text-white transition-all duration-500 py-3 px-12 absolute bottom-5 left-28 shadow-md shadow-gray-400 '>DRESSES</button>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={image5} alt="image" />
                        <button className='cursor-pointer bg-gray-50 hover:bg-red-300 hover:text-white transition-all duration-500 py-3 px-12 absolute bottom-5 left-28 shadow-md shadow-gray-400 '>DRESSES</button>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={image3} alt="image" />
                        <button className='cursor-pointer bg-gray-50 hover:bg-red-300 hover:text-white transition-all duration-500 py-3 px-12 absolute bottom-5 left-28 shadow-md shadow-gray-400 '>DRESSES</button>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={image6} alt="image" />
                        <button className='cursor-pointer bg-gray-50 hover:bg-red-300 hover:text-white transition-all duration-500 py-3 px-12 absolute bottom-5 left-28 shadow-md shadow-gray-400 '>DRESSES</button>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={image4} alt="image" />
                        <button className='cursor-pointer bg-gray-50 hover:bg-red-300 hover:text-white transition-all duration-500 py-3 px-12 absolute bottom-5 left-28 shadow-md shadow-gray-400 '>DRESSES</button>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={image7} alt="image" />
                        <button className='cursor-pointer bg-gray-50 hover:bg-red-300 hover:text-white transition-all duration-500 py-3 px-12 absolute bottom-5 left-28 shadow-md shadow-gray-400 '>DRESSES</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

