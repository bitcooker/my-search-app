import React, { useState } from "react";
import "./Search.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";

function Search() {
const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
        //make sure preventing the refresh
        console.log('U HIT THE SEARCH BTN', input)
    }

  return (
    <form className="search">
      <div className="search__input">
        <BiSearchAlt2 className="search__input-icon" />
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <BiMicrophone />
      </div>

      <div className="search__buttons">
        <button className="btn search1" type="submit" onClick={search}>Search</button>
        <button className="btn lucky">I'm feeling Lucky</button>
      </div>
    </form>
  );
}

export default Search;
