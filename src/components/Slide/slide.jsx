import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import Image from '../../assets/images/keyboard2.png'
import ImageItem1 from '../../assets/images/image4.png'
import ImageItem2 from '../../assets/images/image2.png'
import ImageItem3 from '../../assets/images/image5.png'
import ImageItem4 from '../../assets/images/image1.png'
import ImageItem5 from '../../assets/images/img7.png'
import ImageItem6 from '../../assets/images/kb3.png'
import ImageItem7 from '../../assets/images/kb4.png'
import ImageItem8 from '../../assets/images/sw4.png'
import ImageItem9 from '../../assets/images/icon.png'
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

const data = [
    {
        id: 1,
        mainImg: ImageItem1,
        shadowImg: ImageItem1,
        topImg: ImageItem4,
        bottomImg: ImageItem3
    },
    {
        id: 2,
        mainImg: ImageItem6,
        shadowImg: ImageItem6,
        topImg: ImageItem9,
        bottomImg: ImageItem5
    },
    {
        id: 3,
        mainImg: ImageItem7,
        shadowImg: ImageItem7,
        topImg: ImageItem2,
        bottomImg: ImageItem8
    },
]
const mod = (a, b) => {
    const result = a % b;
    return result >= 0 ? result : result + b;
}
const Slide = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setIndex ((index + 1) % data.length)
        },[5 * 1000])
    },);
    const setActive = mod(index + 1, data.length);
    return (
        <div className="mt-40 mx-20">
            <div className="grid md:grid-cols-2">
                <div className=" flex content-end justify-end">
                    <img src={Image} className="w-full md:w-3/4 " alt="" />
                </div>
                <div className="px-5 md:pr-20">
                    <h2 className="uppercase text-center font-bold pt-5">why should you choose melofors.H's product ?</h2>
                    <p className="text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:mx-16 bg-cover mt-10 md:mt-0 overflow-hidden  rounded-[30px] sm:min-h-[500px] banner">
                <div className='py-5 px-5 md:px-10 md:py-10'>
                    <h1 className='text-center text-xl md:text-3xl font-semibold mb-4'>How does it work?</h1>
                    <div className='py-4'>
                        <div className='flex items-center'>
                            <div>
                                <FaCheckCircle size="30px" style={{ color: "#9c27b0" }} />
                            </div>
                            <h3 className='font-semibold pl-4'>8 on-line lectures with a teacher</h3>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='py-4'>
                        <div className='flex items-center'>
                            <div>
                                <FaCheckCircle size="30px" style={{ color: "#9c27b0" }} />
                            </div>
                            <h3 className='font-semibold pl-4'>
                                A huge library of educational videos that you can
                                watch unlimited
                            </h3>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='py-4'>
                        <div className='flex items-center'>
                            <div>
                                <FaCheckCircle size="30px" style={{ color: "#9c27b0" }} />
                            </div>
                            <h3 className='font-semibold pl-4'>More than 50 practical classes</h3>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='py-4'>
                        <div className='flex items-center'>
                            <div>
                                <FaCheckCircle size="30px" style={{ color: "#9c27b0" }} />
                            </div>
                            <h3 className='font-semibold pl-4'>Chat coordination with your teacher, for feedback
                                and answers to your questions</h3>
                        </div>
                        <p className='text-sm pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='min-h-[300px] md:h-auto'>
                        {data.map((item, i) => {
                            let className = "";
                            if (i === index) {
                                className = "hide"
                            }
                            else if (i === setActive) {
                                className = "active"
                            }
                            return (
                                <div className={`item ${className}`} key={item.id}>
                                    <img src={item.mainImg} className="absolute w-3/4 left-[20%] top-[40%] md:top-[50%] -translate-y-[60%]" alt="" />
                                    <img src={item.topImg} className="absolute w-[80px] top-[-10%] md:w-[120px] left-[50%] md:top-[10%]" alt="" />
                                    <img src={item.bottomImg} className="absolute w-[80px] md:w-[120px] left-[15%] md:top-[65%]" alt="" />
                                    <img src={item.shadowImg} className="absolute top-[45%] md:top-[55%] left-[25%] h-[110px] w-[60%] blur-[10px]" alt="" />
                                </div>)
                        })}
                    </div>
                    <div className='flex justify-center absolute bottom-0 md:bottom-5 left-[50%] -translate-x-[50%]'>
                        <ul className='flex gap-2 rounded-2xl border-solid border-2 border-[#00000011]'>
                            <li className='block  w-[64px] py-6 px-6'>
                                <>
                                    <FaKeyboard />
                                </>
                            </li>
                            <li className='block w-[64px] py-6 px-6'>
                                <>
                                    <FaAlignJustify />
                                </>
                            </li>
                            <li id="next" className='block cursor-pointer rounded-2xl bg-slate-600 w-[64px] py-6 px-6'>
                                <FaArrowRight style={{ color: 'white' }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Slide