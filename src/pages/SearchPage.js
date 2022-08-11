import React from "react";
import { useStateValue } from "../StateProvider";
import useGSearch from "../useGSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BiImages } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMore } from "react-icons/ai";

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
        <div className="searchPage__header-body">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__options-left">
              <div className="searchPage__option">
                <BiSearchAlt2 />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <BiNews />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <BiImages />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <BiShoppingBag />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage__option">
                <SiGooglemaps />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <AiOutlineMore />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__options-right">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__result-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__result-img"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}

                {item.displayLink}
              </a>
              <a className="searchPage__result-title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__result-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
