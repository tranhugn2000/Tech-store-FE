import React from 'react'
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {
    return (
        <section className="bg-gradient-to-tr from-[#BEEBF1] to-[#F3ACCC]">
            <div className="flex items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full  bg-white rounded-[35px] shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-2" action="#">
                            <div>
                                <label for="fullname" className="block mb-2 text-sm font-medium text-gray-900">Fullname</label>
                                <input type="text" name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring focus:ring-violet-300" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring focus:ring-violet-300" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                                <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-violet-300 block w-full p-2.5" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-violet-300 block w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <div className='h-0.5 bg-slate-300 w-full'></div>
                                <p className="mx-5 ">or</p>
                                <div className='h-0.5 bg-slate-300 w-full'></div>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <button type="submit" className="flex justify-center items-center w-full border-solid border-[1px] border-slate-200 hover:!bg-[#F3ACCC] font-medium rounded-lg text-sm px-3 py-2.5 text-center"><FcGoogle size="20px" className="mr-1"/>Sign up with Google</button>
                                <button type="submit" className="flex justify-center items-center w-full border-solid border-[1px] border-slate-200 hover:!bg-[#F3ACCC] font-medium rounded-lg text-sm px-3 py-2.5 text-center"><BsGithub size="20px" className="mr-1"/>Sign up with Github</button>
                            </div>
                            <button type="submit" className="w-full !bg-[#909FEE] hover:!bg-[#F3ACCC] font-medium rounded-lg text-sm !mt-10 px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to="/login" className="font-medium hover:underline "> Sign in here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register