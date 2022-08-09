import React from 'react';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from '../../components/ProductCard';

export default function Products() {
  const router = useRouter();

  const [product, setProduct] = useState();

  useEffect(()=>{
    if(router.query.id){
      const GetProductsById = async()=>{
        const result = await axios.get("https://dummyjson.com/products" + router.query.id);
        console.log(result);
        setProduct(result.data);
      }
      GetProductsById();
    }
  }, [router.query.id])

  return (
    <div>
      <ProductCard 
        thumbnail = {product.thumbnail}
        title = {product.title}
        price = {product.price}
      />
    </div>
  )
}
