import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { GrAppsRounded } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <GrAppsRounded />
          <FaUserAstronaut className="user" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://i.pinimg.com/originals/32/9b/3e/329b3e4c3a1330480b8106ca83d1e187.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
