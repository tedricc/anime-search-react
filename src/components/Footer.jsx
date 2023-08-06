import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__container">
            <a href="/#nav">
              <figure className="footer__logo--wrapper">
                <img
                  src="https://tedricc.github.io/anime-search-project/assets/icon.svg"
                  className="footer__logo"
                  alt=""
                />
              </figure>
            </a>
            <div className="footer__link--list">
              <div className="footer__link">
                <a href="/#nav" className="footer__link--anchor link__hover">
                  Home
                </a>
              </div>
              <div className="footer__link">
                <a href="/#search" className="footer__link--anchor link__hover">
                  Search
                </a>
              </div>
              <div className="footer__link">
                <a
                  href="/#trending"
                  className="footer__link--anchor link__hover"
                >
                  Trending
                </a>
              </div>
              <div className="footer__link">
                <a href="#popular" className="footer__link--anchor link__hover">
                  Popular
                </a>
              </div>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2023 Tedric Chow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
