import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDownShortWide, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';


export default function FilterCont(props){
  const {totalNumber} = props;
  return (
    <div className="filterCont">
      <p> {totalNumber} items</p>
      <div className="sortCont">
        <p>sort by: <button>none</button></p>
        <button><FontAwesomeIcon icon={faArrowDownShortWide} /></button>
        {/* <button><FontAwesomeIcon icon={faArrowUpShortWide} /></button> */}
      </div>
    </div>
  )
}