import React, { useContext, useEffect, useState } from 'react';
// import kodas from '../../../assets/img/ID9329_22_model.jpg'
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';

export const ThirdSection = () => {
    const [fltProduct, setFltProduct] = useState([])
    const [product, setProduct, cart, setcart, addcart, setAddcart, quantite, setQuantité] = useContext(MyContext)

    // const [product, setproduct, data, setData, panier, setPanier] = useContext(MyContext)
    const addToPanier = (param) => {
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
    }
    useEffect(() => {
        setBtnNew(true);
        setBtnOld(false);
        const newP = product.filter((element) => element.state == "new")
        newP.sort(() => Math.random() - 0.5);
        let newA = [newP[0], newP[1], newP[2], newP[3]]
        setFltProduct(newA)
    }, [])
    const newProduct = () => {
        setBtnNew(true);
        setBtnOld(false);
        const newP = product.filter((element) => element.state == "new")
        newP.sort(() => Math.random() - 0.5);
        let newA = [newP[0], newP[1], newP[2], newP[3]]
        setFltProduct(newA)
    }
    const oldProduct = () => {
        setBtnNew(false);
        setBtnOld(true);
        const oldP = product.filter((element) => element.state == "old")
        oldP.sort(() => Math.random() - 0.5);
        let oldA = [oldP[0], oldP[1], oldP[2], oldP[3]]
        setFltProduct(oldA)
    }
    const [btnNew, setBtnNew] = useState(true)
    const [btnOld, setBtnOld] = useState(false)
    const navigate = useNavigate('')
    return (
        <div className='flex flex-col gap-2 border-b-2'>
            <div className='w-[100%] flex gap-4 border-b-2 justify-center'>
                <button onClick={newProduct} className={`border cursor-pointer rounded-t-lg px-3 py-1 border-b-0 ${btnNew ? "bg-gray-900 text-white" : ""}`}>NEW</button>
                <button onClick={oldProduct} className={`border cursor-pointer rounded-t-lg px-3 py-1 border-b-0 ${btnOld ? "bg-gray-900 text-white" : ""}`}>OLD</button>
            </div>
            <div className='w-[100%] py-10  justify-center items-center flex lg:flex-row gap-4 flex-col'>
                {
                    fltProduct.map(element =>
                        <div className='lg:w-[22%] h-[80vh] flex flex-col gap-3 relative justify-center rounded-lg p-4 lg:p-0 mb-20'>
                            <img src={element?.image1} className='bg-[#505050f3] rounded-sm' />
                            <h1 onClick={() => { navigate(`/product/${element?.id}`) }} className='text-xl font-bold hover:text-red-500 cursor-pointer'>{element?.id}</h1>
                            <div className='flex  justify-between'>
                                <p className='text-xl font-bold'>{element?.price} $</p>
                                <button onClick={() => { addToPanier(element) }} className='px-3 py-1 mb-7 bg-black text-white rounded-full'>ADD TO CART</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};