import React from "react";
import "./Search.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <BiSearchAlt2 className="search__input-icon"/>
        <input />
        <BiMicrophone />
      </div>
    </div>
  );
}

export default Search;
