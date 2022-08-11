import React from "react";
import { useStateValue } from "../StateProvider";
import useGSearch from "../useGSearch";
import "./SearchPage.css";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGSearch(term);

  console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
