import React from "react";
import { useState } from "react";

export default function HamburgerMenu({}) {
  const [open, setOpen] = useState(false);

  // if(open){

  // }

  return (
    <div className="hamburgerCont">
      <input type="checkbox" id="openSidebarMenu" />
      <label id="hamburger" for="openSidebarMenu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav id="bg"></nav>
    </div>
  );
}
