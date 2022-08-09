import { useRouter } from 'next/router';
import React, { Component } from 'react'

export default function ProductCard(props) {
  const {
    id = 1,
    thumbnail = 'http://placekitten.com/300/200',
    title = 'iphone',
    price = '$549'
  } = props;

  const router = useRouter();

  return (
    <div onClick={()=>{
      router.push("/product/" + id)
    }}>
      <div className = "cardCont">
        <div className='top'>
          <img src={thumbnail} />
        </div>
        <div className='bottom'>
          <div className='desc'>
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <div className='rating'>
            <img src='http://placekitten.com/100/100' />
            <img src='http://placekitten.com/100/100' />
            <img src='http://placekitten.com/100/100' />
          </div>
        </div>
      </div>
    </div>
  )
}
