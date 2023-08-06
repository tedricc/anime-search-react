import React from "react";
import "./Anime.css";
import { Link } from "react-router-dom";

function Anime({ title, cover, id }) {
  return (
    <div className="anime">
      <Link to={`/results/${id}`}>
        <figure className="anime__img--wrapper">
          <img src={cover} className="anime__img" alt="" />
        </figure>
        <h3 className="anime__name">{title}</h3>
      </Link>
    </div>
  );
}

export default Anime;
