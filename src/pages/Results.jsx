import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Search from "../components/ui/Search";
import SearchRes from "../components/SearchRes";

function Results({ searchRedirect, search }) {
  return (
    <>
      <Nav />
      <Search searchRedirect={searchRedirect} />
      <SearchRes search={search} />
      <Footer />
    </>
  );
}

export default Results;
