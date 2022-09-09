import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HamburgerList from "../HamburgerList";

import axios from "axios";

// const fakeData = [
//   {
//     id: 1,
//     title: "Category 1",
//   },
//   {
//     id: 2,
//     title: "category 2"
//   }
// ]

export default function HamburgerMenu(props) {
  // const [open, setOpen] = useState(false);
  // const { onClick } = props;
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const GetCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      console.log("category " + res.data.category);
      setCategory(res.data);
    };
    GetCategories();
  }, []);

  // if(open){

  // }

  const router = useRouter();

  return (
    <div 
      className="hamburgerCont" 
      // onClick={onClick}
    >
      <input type="checkbox" id="openSidebarMenu" />
      <label id="hamburger" htmlFor="openSidebarMenu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav id="bg">
        <div className="forMargin" />
        {category.map((o, i) => (
          <div key={i}>
            <HamburgerList id={o.id} title={o} />
          </div>
        ))}
      </nav>
    </div>
  );
}
