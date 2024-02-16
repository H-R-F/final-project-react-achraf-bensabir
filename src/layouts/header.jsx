// import React from 'react';
// import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosClose } from "react-icons/io";






import { useContext, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../utils/contextProvider";

export function Header() {
    const [product, setProduct, cart, setcart, addcart, setAddcart, quantite, setQuantité] = useContext(MyContext)
    console.log(cart);

    // console.log(cart[0].quantite);


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const delet = (param) => {
        let del = [...cart]
        del.splice(param, 1)
        setcart(del)

    };

    let emptyCart = false;
    if (cart.length) {
        emptyCart = true
        console.log(emptyCart);

    } else {
        emptyCart = false
        console.log(emptyCart);
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigat = useNavigate()

    return (
        <header className="bg-gray-300 p-2 fixed w-full z-50">
            <Link className="no-underline" to={"/"}>
                <h1 className='text-4xl font-extrabold flex text-gray-900 w-[30vw] '>Fashe<span className='rounded-full w-3 h-3 bg-red-600'></span></h1>
            </Link>

            <nav ref={navRef} className="flex justify-between items-center">
                <Link to={"/"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>Home</Link>
                <Link to={"/shop"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>Shop</Link>
                <Link to={"/"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>Sale</Link>
                <Link to={"/"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>Featurs</Link>
                <Link to={"/"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>Blog</Link>
                <Link to={"/about"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>About</Link>
                <Link to={"/contact"} className='border-b-2 border-gray-300 hover:border-b-2 hover:border-red-500 no-underline text-blue-gray-900 hover:text-red-500 transition-all'>Contact</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
                <Offcanvas classList="relative" placement="end" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Product</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {
                            cart.map((element, index) =>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-3 relative">
                                        <img className="w-28 h-28 border-2" src={element.image1} alt="image" />
                                        <div className="">
                                            <IoIosClose className="text-4xl text-end absolute -top-2 right-0 cursor-pointer" onClick={() => delet(index)} />
                                            <h1 className="text-sm">{element.id}</h1>
                                            <h1 className="text-xl">{element.quantite} x{element.price}</h1>
                                        </div>
                                    </div>
                                    <h1 className="text-xl -mt-7 text-end">Subtotal : {element.total}</h1>
                                </div>
                            )
                        }
                        <h3 className={`flex justify-center text-center text-gray-400 ${emptyCart ? "hidden" : "visible"}`}>sorry <br />There is no productt</h3>
                        <div className="absolute bottom-0 bg-gray-300 rounded-t-md p-2 w-[90%] flex justify-center items-center">
                            <div className={`flex items-end gap-3 ${!emptyCart ? "hidden" : "visible"}`} >
                                <button className="px-8 py-2 bg-gray-500 text-white rounded-sm hover:bg-gray-900 duration-200" onClick={() => navigat("/ShopCart/:id")}>SEE ALL</button>
                                <button className="px-8 py-2 bg-gray-900 text-white rounded-sm" onClick={() => navigat("/")}>CHEK OUT</button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </nav>
            <div className='icons flex justify-between items-center text-gray-900 ml-[20vw] w-[20vw] lg:w-[8vw]'>
                <Link to={"/Signin"}><RxAvatar className='lg:text-2xl text-4xl lg:w-[4vw] text-gray-900 lg:border-r-2 lg:border-red-500 cursor-pointer' /></Link>
                <LiaShoppingBagSolid className='lg:text-2xl text-4xl lg:w-[4vw] cursor-pointer' variant="primary" onClick={handleShow} />
            </div>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}




