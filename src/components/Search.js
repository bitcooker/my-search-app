import React from "react";
import "./Search.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";

function Search() {

    const search = e => {
        e.preventDefault();
    }
  return (
    <div className="search">
      <div className="search__input">
        <BiSearchAlt2 className="search__input-icon" />
        <input />
        <BiMicrophone />
      </div>

      <div className="search__buttons">
        <button className="btn search1" onClick={search}>Search</button>
        <button className="btn lucky">I'm feeling Lucky</button>
      </div>
    </div>
  );
}

export default Search;
