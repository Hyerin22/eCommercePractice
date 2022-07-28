import React, { Component } from 'react'

export default function ProductCard({}) {
  

  return (
    <div>
      <div className = "cardCont">
        <div className='top'>
          <img src='http://placekitten.com/200/100' />
        </div>
        <div className='bottom'>
          <div className='desc'>
            <p>iphone</p>
            <p>$549</p>
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
