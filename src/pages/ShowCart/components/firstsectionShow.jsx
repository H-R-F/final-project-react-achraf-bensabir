import React, { useContext, useState } from 'react';
import image from "../../../assets/img/heading-pages-01.jpg"
import { MyContext } from '../../../utils/contextProvider';

export const FirstsectionShow = () => {
    let [product, setProduct, cart, allquantite, quantite, setQuantité] = useContext(MyContext)
    // let [quantite, setQuantité] = useState(1)
    cart.quantite = quantite
    console.log(cart);

    let emptyCart = false;
    if (cart.length) {
        emptyCart = true
        console.log(emptyCart);

    } else {
        emptyCart = false
        console.log(emptyCart);
    }

    // param.total = quantite * parseInt(param.price)




    return (
        <section className='pt-16'>
            <div className='h-[38vh] flex justify-center items-center text-white' style={{ backgroundImage: `url(${image})` }}>
                <h1 className='lg:text-8xl text-4xl font-extrabold'>YOUR SHOPPING CART</h1>
            </div>
            <div className={`p-10 ${!emptyCart ? "hidden" : "visible"}`}>
                <div className='lg:flex lg:visible hidden justify-between px-2'>
                    <h1 className=''></h1>
                    <h1 className='text-xl font-semibold'>PRODUCT NAME</h1>
                    <h1 className='text-xl font-semibold'>UNIT PRICE</h1>
                    <h1 className='text-xl font-semibold'>QUANTITY</h1>
                    <h1 className='text-xl font-semibold'>TOTAL</h1>
                </div>
                <div className='flex flex-col border-3 gap-3 lg:p-4 lg:m-0 mb-2'>
                    {
                        cart.map((element, index) =>
                            <>
                                <div className=' flex lg:flex-row flex-col items-center justify-between border-b-2'>
                                    <img className='lg:w-[10vw] w-[80vw] mb-3' src={element.image1} alt="image" />
                                    <h1 className='lg:text-xl text-sm lg:w-[25vw] '>{element.id}</h1>
                                    <h1 className='text-xl w-[16vw] ml-12'>${element.price}</h1>
                                    <div className='flex flex-row items-center lg:mr-[8vw]'>
                                        <button className='bg-gray-400 py-2 px-4 rounded-lg text-gray-800 text-2xl hover:bg-gray-900 hover:text-gray-400 duration-200' onClick={() => setQuantité(quantite--, element.total = quantite * parseInt(element.price))}>-</button>
                                        <span className='py-4 px-6 rounded-lg'>{quantite}</span>
                                        <button className='bg-gray-400 py-2 px-4 rounded-lg text-gray-800 text-2xl hover:bg-gray-900 hover:text-gray-400 duration-200' onClick={() => setQuantité(quantite++, element.total = quantite * parseInt(element.price))}>+</button>
                                    </div>
                                    <h1 className='text-2xl visible lg:hidden'>${element.total}</h1>
                                </div>
                                <div className='flex justify-end'>
                                    <h1 className='text-xl font-semibold'>Subtotal <span className='text-xl'>${element.total}</span></h1>
                                    {/* <h1 className='text-xl'>$40</h1> */}
                                </div>
                            </>
                        )
                    }
                </div>
                <div className='flex lg:justify-end justify-center'>
                    <button className='px-8 py-3 bg-gray-900 text-white'>PROCEED TO CHECK OUT</button>
                </div>
            </div>
            <div className={`h-[30vh] flex justify-center items-center ${emptyCart ? "hidden" : "visible"}`}>
                <h3 className='text-gray-400 text-center'>sorry <br />There is no product</h3>
            </div>
        </section>
    );
};

