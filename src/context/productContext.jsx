import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await  axios.get('/getProduct');
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <ProductContext.Provider value={{ productList, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
