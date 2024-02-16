import React, { useContext } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';

export const SecondSectionPro = () => {
    const [product, setProduct, cart, setcart] = useContext(MyContext)
    const navigate = useNavigate()

    const add = (param) => {
        cart.push(param)
        console.log(cart);
    }

    return (
        <section className='p-10'>
            <h1 className='text-center font-semibold'>RELATED PRODUCTS</h1>
            <div className='w-full flex flex-wrap gap-2'>
                {
                    product.map((element, index) =>
                        <div className='w-72'>
                            <div className=' h-fit w-72 group'>
                                <div class="group w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                    <div class="h-96 w-72">
                                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.image1} alt="" onClick={() => navigate(element.id)} />
                                    </div>
                                    <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-gray-900 hover:bg-red-500 hover:text-white duration-300 " onClick={() => add(element)}>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-sm hover:text-red-500 cursor-pointer'  onClick={() => navigate(`/product/${element.id}`)}>{element.id}</h1>
                                <h1 className='text-sm'>{element.price}</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

