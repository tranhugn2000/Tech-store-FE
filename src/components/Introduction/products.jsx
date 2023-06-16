import {React, useState, useEffect } from 'react'
import { FaLaptopCode, FaCloudUploadAlt, FaKeyboard } from "react-icons/fa";
import Image from '../../assets/images/product/111.jpg';
import Image2 from '../../assets/images/product/333.png';
import { ProductContext } from '../../context/productContext'

const items = [
    {
      id: 1,
      icon: <FaCloudUploadAlt size="40px" style={{color: "white"}}/>,
      title: 'Chất lượng cao',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  
    },
    {
      id: 2,
      icon: <FaKeyboard size="40px" style={{color: "white"}}/>,
      title: 'Thiết kế đột phá',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  
    }, {
      id: 3,
      icon: <FaLaptopCode size="40px" style={{color: "white"}}/>,
      title: 'Công nghệ hiện đại',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  
    },  {
      id: 4,
      icon: <FaLaptopCode size="40px" style={{color: "white"}}/>,
      title: 'Công nghệ hiện đại',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  
    }, 
    {
      id: 5,
      icon: <FaCloudUploadAlt size="40px" style={{color: "white"}}/>,
      title: 'Chất lượng cao',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  
    },
    {
      id: 6,
      icon: <FaKeyboard size="40px" style={{color: "white"}}/>,
      title: 'Thiết kế đột phá',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  
    },
  ]
const products = () => {
    // const {ProductList} = useContext(ProductContext)
    // const { productList, fetchProducts } = useContext(ProductContext);

    useEffect(() => {
      // fetchProducts();
      console.log('aaaa');
      const fetchProducts = async () => {
        try {
          const response = await  axios.get('http://127.0.0.1:8000/api/getProduct');
          const data = await response.json();
          console.log(data);
          setProductList(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    }, []);
    const [isHovered, setIsHovered] = useState();

    const handleMouseEnter = (index) => {
      setIsHovered(index);
    }
  
    const handleMouseLeave = () => {
      setIsHovered(null);
    }


  return (
    <section className="mt-10 mx-10 md:mx-40">
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4' >
    <div className="col-span-2">
        <div className="relative rounded-lg mx-auto shadow-xl shadow-blue-200 min-h-[450px] bg-white">
            <img src={Image2} className="absolute w-[90px] left-16" alt="" />

            <img src={Image} className="absolute w-full md:w-2/5 top-1/3 right-0" alt="" />
            <div className='absolute'> 
                
            <h2 className="pt-10 text-center font-semibold">aaaaaaaaaa aaaaaaaaaaaaa</h2>
            <p className="pt-5 px-8 indent-8 text-justify">aaaaaaaaaaaaaaaaaa</p>
            </div>
        </div>
    </div>
  {items.map(item => {
    return (
      <div key={item.id} onMouseEnter={() => handleMouseEnter(item.id)}
      
      onMouseLeave={handleMouseLeave}>
        <div className={`${isHovered === item.id ? 'h-[500px]' : 'h-[450px]'} ${ item.id == 5 ? 'bg-[#cde8c0]' : 'bg-white'} rounded-lg mx-auto shadow-lg shadow-blue-200 hover:shadow-red-300  max-w-[345px] `}>
          <h2 className="pt-10 text-center font-semibold">{item.title}</h2>
          <p className="pt-5 px-8 indent-8 text-justify">{item.description}</p>
        </div>
      </div>)
  })}
</div>
</section>
  )
}

export default products