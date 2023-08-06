import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Loading.css"

function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon="fa-solid fa-spinner" className="fas fa-spinner" />
    </div>
  );
}

export default Loading;
