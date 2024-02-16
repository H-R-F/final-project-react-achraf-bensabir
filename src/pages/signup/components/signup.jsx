import { GoChevronRight } from "react-icons/go";
import { FaUser } from "react-icons/fa";
export const FirstSectionRegister = () => {
    return (
        <>
        <div className='h-[8.5vh] pb-16'></div>
            <div className="flex justify-center ">
                <div className="w-[80%] max-[430px]:w-[95%] flex flex-col">
                    <p className="text-5xl">Create Account</p>
                    <p className="text-xl mt-3">Your Personal Details</p>
                    <form className="pr-60 max-[430px]:pr-4  pl-4 pt-4" action="">
                        <div className="flex flex-col pb-2">
                            <label className="pb-2 w-[38vw]" htmlFor="">First Name</label>
                            <input className="border-2 p-2 lg:w-[40vw] w-[70vw] border-black rounded-sm" placeholder="First Name" type="text" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <label className="pb-2 w-[38vw]" htmlFor="">Last Name</label>
                            <input className="border-2 p-2 lg:w-[40vw] w-[70vw] border-black rounded-" placeholder="Last Name" type="text" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <label className="pb-2" htmlFor="">Email</label>
                            <input className="border-2 p-2 lg:w-[40vw] w-[70vw] border-black rounded-" placeholder="Email" type="email" />
                        </div>
                        <div className="flex flex-col">
                            <label className="pb-2 w-[38vw]" htmlFor="">Password</label>
                            <input className="border-2 p-2 lg:w-[40vw] w-[70vw] border-black rounded-" placeholder="password" type="password" />
                        </div>
                        <div className="flex items-center py-8 w-[90vw]">
                            <button className="bg-[#292929] px-12 text-white  py-3  mr-6 flex items-center"><FaUser className="text-sm mr-1" /> CREATE</button>
                            <p className="w-[40vw] lg:text-ms text-xs">or Return to Store</p>
                        </div>
                    </form>
                </div>

            </div>

        </>
    );
};