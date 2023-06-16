import React from 'react'
import heroImg from '../../assets/images/hero2.png'
import { Link } from "react-router-dom";

const hero = () => {
    return (
        <section id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-[400px] overflow-hidden md:h-[500px]">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                        <img src="http://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/rev_home2.jpg" className="absolute object-cover sm:object-fill h-full w-full " alt="..." />
                        <div className='absolute z-40 ms-10 md:ml-40 top-1/3'> 
                            <div className='text-5xl font-normal max-w-[250px]'> The Gold Standard Of Televisions</div>
                            <span className='text-xl pt-7'>The Gold Standard </span>
                            <div className='pt-7'>
                                <Link to="/login"
                                    className="py-2 px-5 rounded-lg text-black bg-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
                                        Shop Now {'>'}
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="http://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/rev_home2.jpg" className="absolute object-cover sm:object-fill h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="http://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/rev_home2.jpg" className="absolute object-cover sm:object-fill h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

            </div>
            {/* <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="btnA w-3 h-3 rounded-full !bg-white/50 hover:!bg-white " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="btnA w-3 h-3 rounded-full !bg-white/50 hover:!bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="btnA w-3 h-3 rounded-full !bg-white/50 hover:!bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </section>
    )
}

export default hero

