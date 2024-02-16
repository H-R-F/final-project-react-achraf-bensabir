import React from 'react';

export const SixthSection = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-3xl font-bold lg:w-full w-[50vw] mb-8 lg:mb-0'>@ FOLLOW US ON INSTAGRAM</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mb-6 lg:mb-0 lg:p-12'>
                <div className='lg:w-[20vw] text-center'>
                    <h1 className='text-xl'>Free Delivery Worldwide</h1>
                    <h1 className='text-sm italic'>Mirum est notare quam littera gothica</h1>
                </div>
                <div className='border-r-2 border-l-2 px-12 lg:px-0  lg:w-[30vw] text-center'>
                    <h1 className='text-xl'>30 Days Return</h1>
                    <h1 className='text-sm italic'>Simply return it within 30 days for an exchange.</h1>
                </div>
                <div className='text-center  lg:w-[20vw]'>
                    <h1 className='text-xl'>Store Opening</h1>
                    <h1 className='text-sm italic'>Shop open from Monday to Sunday</h1>
                </div>
            </div>
        </section>
    );
};

