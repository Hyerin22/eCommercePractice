import React from 'react';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from '../../components/ProductCard';

// const fakeData = {
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//   "images": [
//     "https://dummyjson.com/image/i/products/1/1.jpg",
//     "https://dummyjson.com/image/i/products/1/2.jpg",
//     "https://dummyjson.com/image/i/products/1/3.jpg",
//     "https://dummyjson.com/image/i/products/1/4.jpg",
//     "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
//   ]
// }

export default function Products() {
  const router = useRouter();

  const [product, setProduct] = useState(fakeData);

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
