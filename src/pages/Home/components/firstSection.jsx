
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import Image from '../../../assets/img/master-slide-01.jpg';
import Image1 from '../../../assets/img/master-slide-02.jpg';
import Image2 from '../../../assets/img/master-slide-04.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';




export const FirstSection = () => {
    const navigate = useNavigate()
    const [test, setTest] = useContext(MyContext)
    return (
        <section className=' pt-8 lg:pt-10'>
            <Carousel fade className=''>
                <Carousel.Item>
                    <div className="w-[100vw] h-[87vh] flex items-center justify-center" style={{ backgroundImage: `url(${Image})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white m-0 tracking-wide'>Women Collection 2018</p>
                            <h1 className='font-black text-[3rem] text-white'>NEW ARRIVALS</h1>
                            <button className='bg-white text-black font-thin py-[0.5rem] px-[1.8rem] rounded-3xl text-[0.8rem] my-2' onClick={()=> navigate("/shop")}>SHOP NOW</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w-[100vw] h-[87vh] flex items-center justify-center" style={{ backgroundImage: `url(${Image1})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white m-0 tracking-wide'>Women Collection 2018</p>
                            <h1 className='font-black text-[3rem] text-white'>NEW ARRIVALS</h1>
                            <button className='bg-white text-black font-thin py-[0.5rem] px-[1.8rem] rounded-3xl text-[0.8rem] my-2' onClick={()=> navigate("/shop")}>SHOP NOW</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w-[100vw] h-[87vh] flex items-center justify-center" style={{ backgroundImage: `url(${Image2})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white m-0 tracking-wide'>Women Collection 2018</p>
                            <h1 className='font-black text-[3rem] text-white'>NEW ARRIVALS</h1>
                            <button className='bg-white text-black font-thin py-[0.5rem] px-[1.8rem] rounded-3xl text-[0.8rem] my-2' onClick={()=> navigate("/shop")}>SHOP NOW</button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
