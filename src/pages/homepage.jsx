import React from 'react'
import Hero from '../components/Hero/hero'
import Intro from '../components/Introduction/intro'
import Product from '../components/Introduction/products'
import ProductContextProvider from '../context/productContext'
import Slide from '../components/Slide/slide'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Intro/>
    <ProductContextProvider>
    <Product/>
    </ProductContextProvider>
    <Slide/>
    </>
    
  )
}

export default HomePage