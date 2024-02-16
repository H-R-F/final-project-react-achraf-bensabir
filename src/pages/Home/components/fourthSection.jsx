import React from 'react';
import image1 from "../../../assets/img/banner-08.jpg"
import image2 from "../../../assets/img/shop-item-09.jpg"
export const FourthSection = () => {
    return (
        <section className='flex flex-col lg:flex-row bg-gray-200 p-4 lg:p-14 mb-4 gap-y-9 lg:gap-x-9'>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-110 duration-500' src={image1} alt="" />
                </div>
                <div className='absolute top-[10vh] left-[16vw] lg:top-[20vh] lg:left-[8vw] text-white text-center'>
                    <h1 className='lg:w-[30vw] w-[50vw] lg:mb-8'>The Beauty <span className='text-5xl font-extrabold'>LOOKBOOK</span></h1>
                    <button className='cursor-pointer border-2 border-white py-2 px-8 lg:py-3 lg:px-12 font-semibold text-gray-50 hover:bg-white hover:text-gray-900 duration-500 '>VIEW COLLECTION</button>
                </div>
            </div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-110 duration-500' src={image2} alt="image" />
                </div>
                <div className='absolute bottom-[3vh] left-[8vh] lg:bottom-[6vh] lg:left-[13vw] flex flex-col justify-center items-center'>
                    <h1 className='text-xl'>Boxy2 T-Shirt with Roll Sleeve</h1>
                    <h1 className='text-xl'>$20.00</h1>
                    <button className='cursor-pointer border-2 border-gray-900 bg-gray-900 py-2 px-8  lg:py-3 lg:px-12 font-semibold text-gray-50 hover:bg-white hover:text-gray-900 duration-500 '>SEE MORE</button>
                </div>
            </div>
        </section>
    );
};

