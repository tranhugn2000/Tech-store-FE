import { React, useState, useEffect, useContext } from "react";
import { FaLaptopCode, FaCloudUploadAlt, FaKeyboard } from "react-icons/fa";
import Image from "../../assets/images/product/111.jpg";
import Image2 from "../../assets/images/product/333.png";
import { ProductContext } from "../../context/productContext";

const products = () => {
  const products = useContext(ProductContext);
  const [isHovered, setIsHovered] = useState();
  console.log(products);
  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <section className="mt-10 mx-10 md:mx-40">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
        <div className="col-span-2">
          <div className="relative rounded-lg mx-auto shadow-xl shadow-blue-200 min-h-[450px] bg-white">
            <img src={Image2} className="absolute w-[90px] left-16 " alt="" />

            <img
              src={Image}
              className="absolute w-full md:w-2/5 top-1/3 right-0"
              alt=""
            />
            <div className="absolute top-32 left-5">
              <h2 className="pt-10  text-center font-semibold">
                aaaaaaaaaa aaaaaaaaaaaaa
              </h2>
              <p className="pt-5 px-8 indent-8 text-justify">aaa:</p>
            </div>
          </div>
        </div>
        {products.map((product, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`${
                  isHovered === index ? "h-[500px]" : "h-[450px]"
                } ${
                  index == 4 ? "bg-[#cde8c0]" : "bg-white"
                } rounded-lg mx-auto shadow-lg shadow-blue-200 hover:shadow-red-300  max-w-[345px] `}
              >
                { product.images[0] !== null ? (product.images[0].file_path == null ? (
                  <img src="" className="" alt="" />
                ) : (
                  <div className="w-full flex justify-center">
                    <img src={product.images[0].file_path} className="h-[230px] w-[230px]" alt="" />
                  </div>
                )): <img src="" className="" alt="" /> }

                <h2 className="pt-5 text-center text-base font-medium">
                  {product.name}
                </h2>
                <p className="pt-5 px-8 indent-8 text-justify">
                  {product.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default products;
