import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav" id="nav">
      <div className="nav__container">
        <a href="/#nav">
          <figure className="nav__logo--wrapper">
            <img
              src="https://tedricc.github.io/anime-search-project/assets/icon.svg"
              className="nav__logo"
              alt=""
            />
          </figure>
        </a>
        <div className="nav__link--list">
          <div className="nav__link">
            <a href="/#nav" className="nav__link--anchor link__hover">
              Home
            </a>
          </div>
          <div className="nav__link">
            <a href="/#search" className="nav__link--anchor link__hover">
              Search
            </a>
          </div>
          <div className="nav__link">
            <a href="/#trending" className="nav__link--anchor link__hover">
              Trending
            </a>
          </div>
          <div className="nav__link">
            <a href="/#popular" className="nav__link--anchor link__hover">
              Popular
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
