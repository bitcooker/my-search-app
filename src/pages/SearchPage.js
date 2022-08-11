import React from "react";
import { useStateValue } from "../StateProvider";
import useGSearch from "../useGSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from '../components/Search';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  //const { data } = useGSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://i.pinimg.com/originals/32/9b/3e/329b3e4c3a1330480b8106ca83d1e187.png"
            alt=""
          />
        </Link>
        <div className='searchPage__header-body'>
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
