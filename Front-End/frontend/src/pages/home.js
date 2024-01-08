import axios from 'axios'
import { useState,useEffect } from 'react'

const ProductsContainer=()=>{
const[products,setProducts] = useState(null)
const[loading, setLoading] = useState(true)


useEffect(()=>{
    const fetchProducts = async()=>{
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:4000/product/get');
          console.log(response.data)
          setProducts(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Products:', error);
          setLoading(true);
        }
      };
  
      fetchProducts();
    }, [])
    }









export default ProductsContainer