import React from 'react';
import image1 from "../../../assets/img/blog-01.jpg"
import image2 from "../../../assets/img/blog-02.jpg"
import image3 from "../../../assets/img/blog-03.jpg"

export const FifthSection = () => {
    return (
        <section className='flex flex-col gap-7 p-6'>
            <h1 className='text-center font-bold'>
                OUR BLOG
            </h1>
            <div className='flex flex-col lg:flex-row gap-7 p-6'>
                <div className='lg:w-[50vw] '>
                    <div className="overflow-hidden mb-3">
                        <img className='hover:scale-110 duration-500 lg:w-[50vw]' src={image1} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <h1 className='text-sm'>by fashe-theme Admin on Dec 28,2017</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                        </p>
                    </div>
                </div>
                <div className=' lg:w-[50vw]'>
                    <div className="overflow-hidden mb-3">
                        <img className='hover:scale-110 duration-500 lg:w-[50vw]' src={image2} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                        <h1 className='text-sm'>by fashe-theme Admin on Dec 28,2017</h1>
                        <p className='text-sm'>
                            Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...
                        </p>
                    </div>
                </div>
                <div className='lg:w-[50vw]'>
                    <div className="overflow-hidden mb-3">
                        <img className='hover:scale-110 duration-500 lg:w-[50vw]' src={image3} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl'>New York SS 2018 Street Style: By Annina Mislin</h1>
                        <h1 className='text-sm'>by fashe-theme Admin on Dec 28,2017</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

