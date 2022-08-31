import React from 'react'
import { useRouter } from 'next/router';

export default function HamburgerList(props) {
  const {
    title = 'category'
  } = props;

  const router = useRouter();

  return (
    <div className='listCont'>
      <p>{title}</p>
    </div>
  )
}
