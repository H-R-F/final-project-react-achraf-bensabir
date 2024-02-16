import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useParams } from 'react-router-dom';

export const FirstSectionPro = () => {
    let [product, setProduct, cart, allquantite, quantite, setQuantité] = useContext(MyContext)
    const { id } = useParams()
    let filterProduct = product.filter((e) => e.id == id)
    const [activeImg, setActiveImg] = useState(filterProduct[0].image1)
    

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
                param.quantite = quantite
                param.total = quantite * parseInt(param.price)
                console.log(param.total);
                filterProduct = null

            } else {
                param.quantite = quantite
                param.total = parseInt(quantite * param.price)
                console.log(param.total);
                cart.push(param)
                setQuantité(1)
            }
        } else {
            console.log(param.quantite);
            param.quantite = quantite
            param.total = parseInt(quantite * param.price)
            console.log(param.total);
            console.log(cart);
            cart.push(param)
            setQuantité(1)
            console.log(cart);
        }

    }
    return (
        <section>
            {
                filterProduct.map((element, index) =>
                    <section className="flex lg:flex-row flex-col justify-evenly  items-start pt-20 pb-6 px-20 w-[90vw]">
                        <div className="flex items-center ">
                            <div className="flex flex-col justify-around gap-3  pt-3">
                                <div className='overflow-hidden'>
                                    <img className="w-[10vw] p-1 mx-2 rounded-md hover:scale-95 duration-500" src={element.image1} onClick={() => setActiveImg(element.image1)} alt="image" />
                                </div>
                                <div className='overflow-hidden'>
                                    <img className="w-[10vw] p-1 mx-2 rounded-md hover:scale-95 duration-500" src={element.image2} onClick={() => setActiveImg(element.image2)} alt="image" />
                                </div>
                                <div className='overflow-hidden'>
                                    <img className="w-[20vw] p-1 mx-2 rounded-md hover:scale-95 duration-500" src={element.image3} onClick={() => setActiveImg(element.image3)} alt="image" />
                                </div>
                                <div className='overflow-hidden'>
                                    <img className="w-[20vw] p-1 mx-2 rounded-md hover:scale-95 duration-500" src={element.image4} onClick={() => setActiveImg(element.image4)} alt="image" />
                                </div>
                            </div>
                            <img className=" lg:w-[32vw] w-full px-[2vw] rounded-md" src={activeImg} alt="image" />
                        </div>
                        <div className="lg:block flex flex-col items-center justify-center w-[60vw]">
                            <div className="border-gray-800 mb-6">
                                <h1 className="lg:text-4xl text-sm pb-2">{element.id}</h1>
                                <p className="lg:text-4xl text-md font-bold pb-2"> ${element.price}</p>
                                <h2 className="lg:text-xl text-xs pb-2">{element.miniDescription}</h2>
                                <div className='flex gap-3'>
                                    <div className='bg-gray-100 border-2 border-red-400 hover:bg-red-400  duration-200 rounded-sm w-12 h-10 flex justify-center items-center'>S</div>
                                    <div className='bg-gray-100 border-2 border-red-400  hover:bg-red-400 duration-200 rounded-sm w-12 h-10 flex justify-center items-center'>M</div>
                                    <div className='bg-gray-100 border-2 border-red-400  hover:bg-red-400 duration-200 rounded-sm w-12 h-10 flex justify-center items-center'>L</div>
                                    <div className='bg-gray-100 border-2 border-red-400  hover:bg-red-400 duration-200 rounded-sm w-12 h-10 flex justify-center items-center'>XL</div>
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col items-center lg:gap-12 gap-3 mb-4">
                                <div className='flex flex-row items-center'>
                                    <button className='bg-gray-400 py-2 px-4 rounded-lg text-gray-800 text-2xl hover:bg-gray-900 hover:text-gray-400 duration-200' onClick={() => setQuantité(quantite--)}>-</button>
                                    <span className='py-4 px-6 rounded-lg'>{quantite}</span>
                                    <button className='bg-gray-400 py-2 px-4 rounded-lg text-gray-800 text-2xl hover:bg-gray-900 hover:text-gray-400 duration-200' onClick={() => setQuantité(quantite++)}>+</button>
                                </div>
                                <button className="bg-gray-900 text-white font-semibold py-3 lg:px-16 lg:w-fit w-32 rounded-full h-full" onClick={() => add(element)}>Add To Cart</button>
                            </div>
                            <div className='flex lg:flex-row flex-col justify-between border-b-2"'>
                                <h1 className='text-sm'><span className='text-gray-500'>Brand: </span>{element.brand}</h1>
                                <h1 className='text-xs'><span className='text-gray-500'>Categories: </span>{element.Categories}</h1>
                            </div>
                            <div>
                                <h1>Description</h1>
                                <p className='lg:text-xl text-xs lg:w-fit w-[80vw]'>{element.description}</p>
                            </div>
                        </div>
                    </section>
                )
            }
        </section>
    );
};

