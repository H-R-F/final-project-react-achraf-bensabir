import { GoChevronRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
export const FirstSectionAccount = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-white pt-16 lg:p-0 p-3 ">
                <div className="flex lg:flex-row flex-col items-center  gap-6 pt-16 pb-10 ">
                    <div className="flex flex-col w-[100%] bg-white border p-4 h-[fit-content]">
                        <p className="text-3xl">New Customer</p>
                        <b className="text-[#988b88]">Register Account</b>
                        <p className="pt-1 pb-6 text-[#a4a2a0]">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <Link to={"/Signup"}><button className="bg-[#292929] w-[30%] text-white  py-2 ">CONTINUE</button></Link>
                    </div>
                    <div className="flex flex-col w-[100%] border p-4">
                        <p className="text-3xl">Returning Customer</p>
                        <p className="text-[#988b88]">I am a returning customer</p>
                        <form action="">
                            <div className="flex flex-col pb-4">
                                <label className="pb-2" htmlFor="">Email</label>
                                <input className=" p-2 rounded-sm border-2 border-black" placeholder="Email" type="email" />
                            </div>
                            <div className="flex flex-col">
                                <label className="pb-2" htmlFor="">Password</label>
                                <input className=" p-2 rounded-sm border-2 border-black" placeholder="password" type="password" />
                            </div>
                            <p className="pb-4">Forgot your password?</p>
                            <div className="flex items-center">
                                <button className="bg-[#292929] w-[30%] text-white  py-2 ">SIGN IN</button>
                                <p>or Return to Store</p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};