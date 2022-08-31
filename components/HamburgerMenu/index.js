import React from "react";
import { useState, useEffect } from "react";

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
  const {onClick} = props;
  const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   const GetCategories = async () => {
  //     const res = await axios.get("https://dummyjson.com/products");
  //     console.log("category " + res.data.category);
  //     setCategory(res.data.category);
  //   };
  //   GetCategories();
  // }, []);

  // if(open){

  // }

  return (
    <div 
      className="hamburgerCont"
      onClick={onClick}
      >
      <input type="checkbox" id="openSidebarMenu" />
      <label id="hamburger" htmlFor="openSidebarMenu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav id="bg">
        {/* {category.map((o, i) => ( */}
          {/* <div key = {i}> */}
            <HamburgerList 
              // title = {o.category}
            />

          {/* </div> */}
        {/* ))} */}
      </nav>
    </div>
  );
}
