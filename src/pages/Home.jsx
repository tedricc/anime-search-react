import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

function Home({ searchRedirect }) {
  return (
    <>
      <Nav />
      <Landing searchRedirect={searchRedirect} />
      <Footer />
    </>
  );
}

export default Home;
