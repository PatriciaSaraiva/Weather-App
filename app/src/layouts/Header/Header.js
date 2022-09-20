import React from "react";

import Search from "../../components/search/Search";
import logo from "../../assets/images/weather-logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img className="header-logo" alt="weather logo" src={logo} />
      <div className="header-search_bar">
        <Search />
      </div>
    </header>
  );
};

export default Header;
