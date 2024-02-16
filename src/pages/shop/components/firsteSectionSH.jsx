import React, { useContext, useState } from 'react';
import image from '../../../assets/img/heading-pages-02.jpg';
import { MyContext } from '../../../utils/contextProvider';
import { Checkbox } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
export const FirsteSection = () => {
    const [product, setProduct, cart, setcart, quantite, setQuantité] = useContext(MyContext)
    const navigate = useNavigate()

    let [arrayFilter, setArrayFilter] = useState(...[product])


    const filtergenre = (param) =>{
        let filterGenre = product.filter((el) => el.genre.includes(param) )
        setArrayFilter(filterGenre)
    }





    const filterPrice = (a, b) =>{
        let filterGenre = product.filter((el) =>  ( el.price >= a && el.price <b) )
        setArrayFilter(filterGenre)
    }


    const add = (param) => {

        if (cart.length >= 1) {
            let bol = true
            let findpro = cart.filter((e) => e.id == param.id)
            if (findpro == 0) {
                bol = false
            } else {
                bol = true
            }
            if (bol) {
                param.quantite++
                param.total = quantite * parseInt(param.price)

            } else {
                param.quantite = 1
                cart.push(param)
                param.total = quantite * parseInt(param.price)

            }
        } else {
            cart.push(param)
            param.total = quantite * parseInt(param.price)
        }
        
        // param.quantite = 1
        // cart.push(param)
        // console.log(cart);
    }
    

    return (
        <section className='pt-16'>
            <div className='h-[38vh] flex justify-center items-center text-white' style={{ backgroundImage: `url(${image})` }}>
                <h1 className='lg:text-8xl text-7xl font-extrabold'>PRODUCTS</h1>
            </div>

            <div className='flex lg:flex-row justify-center lg:items-start items-center flex-col p-4'>
                <div className='flex flex-wrap lg:flex-col lg:gap-6 lg:w-[30vw] w-full text-sm'>
                    <div className='lg:w-fit w-[40vw]'>
                        <h1 className='text-xl font-bold'>Categories</h1>
                        <h1 className='text-sm cursor-pointer' onClick={(e)=>filtergenre(e.target.innerHTML)}>Men</h1>
                        <h1 className='text-sm cursor-pointer' onClick={(e)=>filtergenre(e.target.innerHTML)}>Women</h1>
                        <h1 className='text-sm cursor-pointer' onClick={(e)=>filtergenre(e.target.innerHTML)}>Kids</h1>
                    </div>

                    <div className='lg:w-fit w-[40vw]'>
                        <h1 className='text-xl font-bold'>Price</h1>
                        <div className='flex items-center' onClick={()=>filterPrice(0,20)}>
                            <input className=' mr-1' type="radio" name='20' id='20' />
                            <label className='text-sm cursor-pointer' for="20" >0-20</label>
                        </div>
                        <div className='flex items-center' onClick={()=>filterPrice(20,40)}>
                            <input className=' mr-1' type="radio" name='20' id='40' />
                            <label className='text-sm cursor-pointer' for="40">20-40</label>
                        </div>
                    </div>

                    <input type="search" placeholder='Search' className='lg:p-3 lg:py-0 lg:px-0 py-3 px-8 border mb-3' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col lg:flex-row items-center justify-between lg:w-[70vw] w-full' >
                        <div className='flex w-full flex-row items-center lg:gap-3 gap-2 mb-4'>
                            <select name="" id="" className='lg:px-24 lg:w-fit w-[5rem] lg:py-2 border '>
                                <option value="" className='cursor-pointer'>1</option>
                                <option value="" className='cursor-pointer'>2</option>
                                <option value="" className='cursor-pointer'>3</option>
                                <option value="" className='cursor-pointer'>4</option>
                                <option value="" className='cursor-pointer'>5</option>
                            </select>
                            <select name="" id="" className='lg:px-24 lg:w-fit w-[5rem] lg:py-2 border'>
                                <option value="" className='cursor-pointer'>10</option>
                                <option value="" className='cursor-pointer'>20</option>
                                <option value="" className='cursor-pointer'>30</option>
                                <option value="" className='cursor-pointer'>ALL</option>
                            </select>
                            <h1 className='text-xs lg:mt-0 mt-2'>Showing 8 of items</h1>
                        </div>
                    </div>
                    <section>
                            <div className=' flex flex-wrap justify-center items-center gap-3'>
                        {
                            arrayFilter.map((element, index) =>
                                <div className='lg:w-72'>
                                    <div className=' h-fit w-72 group'>
                                        <div class="group w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                            <div class="h-96 w-72">
                                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.image1} alt="" />
                                            </div>
                                            <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                            <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-gray-900 hover:bg-red-500 hover:text-white duration-300" 
                                                    onClick={()=>add(element)}
                                                >ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-sm hover:text-red-500 cursor-pointer' onClick={() => navigate(`/product/${element.id}`)}>{element.id}</h1>
                                        <h1 className='text-sm'>${element.price}</h1>
                                    </div>
                                </div>
                                )
                            }
                            </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

