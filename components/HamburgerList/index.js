import React from 'react'
import { useRouter } from 'next/router';

export default function HamburgerList(props) {
  const {
    title,
    id = 1
  } = props;

  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/product/" + id)
      }}
      className='listCont'>
      <p>{title}</p>
    </div>
  )
}
