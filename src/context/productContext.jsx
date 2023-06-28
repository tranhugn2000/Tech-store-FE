import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductContext = createContext()
const ProductContextProvider = ({children}) =>{
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getProduct');
        setProducts(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, []);

    return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
    )
}
 export default ProductContextProvider