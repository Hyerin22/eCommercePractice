import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';


export default function FilterCont({}){
  return (
    <div className="filterCont">
      <p> &#123;number&#125; items</p>
      <div className="sortCont">
        <p>sort by: <button>none</button></p>
        <button><FontAwesomeIcon icon={faArrowDownShortWide} /></button>
      </div>
    </div>
  )
}