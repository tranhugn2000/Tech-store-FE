import {React, useState } from 'react'
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiShieldCheckLine } from "react-icons/ri";

const item = [
  {
    id: 1,
    icon: <TbTruckDelivery size="35px" className='font-light' style={{color: "black"}}/>,
    title: 'Free Delivery',
    description: 'Free shipping over $100'
  },
  {
    id: 2,
    icon: <TbTruckReturn size="35px" style={{color: "black"}}/>,
    title: 'Free Return',
    description: 'Free return over $100'

  }, {
    id: 3,
    icon: <BiSupport size="35px" style={{color: "black"}}/>,
    title: 'Customer Support',
    description: '24/7 customer support'

  }, 
  {
    id: 4,
    icon: <RiShieldCheckLine size="35px" style={{color: "black"}}/>,
    title: 'Money Back Guarantee',
    description: 'Free shipping over $100'

  }, 
]
const intro = () => {

  return (
    <section className="mt-10 mx-10 md:mx-40">
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
      {item.map(item => {
          return (
        <div key={item.id} className='font-normal grid grid-rows-3 md:grid-rows-2 grid-flow-col'> 
          <div class="row-span-1 md:row-span-2 justify-self-center">{item.icon}</div>
          <div class="md:col-span-11 text-sm font-bold justify-self-center md:justify-self-start">{item.title}</div>
          <div class="md:col-span-11 text-sm text-gray-500 justify-self-center md:justify-self-start">{item.description}</div>
        </div>
        )
      })}
      </div>
      
    </section>
  )
}

export default intro