import React, { useState } from "react";
import "./Search.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
const [{ state }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
     //make sure preventing the refresh
    e.preventDefault();
   
    console.log("U HIT THE SEARCH BTN", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <BiSearchAlt2 className="search__input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <BiMicrophone />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <button className="btn search1" type="submit" onClick={search}>
            Search
          </button>
          <button className="btn lucky">I'm feeling Lucky</button>
        </div>
      ) : (
        <div className="search__buttons">
          <button className="btn-hidden search1" type="submit" onClick={search}>
            Search
          </button>
          <button className="btn-hidden lucky">I'm feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
