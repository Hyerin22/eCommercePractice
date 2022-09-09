import { useRouter } from "next/router";
import React, { Component } from "react";

export default function ProductCard(props) {
  const {
    id = 1,
    thumbnail = "http://placekitten.com/300/200",
    desc = "this is a new iphone",
    title = "iphone",
    price = "$549",
  } = props;

  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/product/" + id);
      }}
      className="cardCont"
    >
      <div>
        <div className="top">
          <img src={thumbnail} />
        </div>
        <div className="bottom">
          <p>{title}</p>
          <div className="desc">
            <p>{desc.substr(0,30) + '...'} </p>
          </div>
          <div className="priceRatnig">
            <p>{price}</p>
            <div className="rating">
              <img src="http://placekitten.com/100/100" />
              <img src="http://placekitten.com/100/100" />
              <img src="http://placekitten.com/100/100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
