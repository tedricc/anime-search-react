import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Search from "../components/ui/Search";
import AnimeInfo from "../components/AnimeInfo";

function Info({ searchRedirect }) {
  return (
    <>
      <Nav />
      <Search searchRedirect={searchRedirect} />
      <AnimeInfo />
      <Footer />
    </>
  );
}

export default Info;
