import React from "react";
import "./card.css";

function card({ text, img, alt }) {
  return (
    <>
      <div className="card-container">
        <div className="card-img-container">
          <img src={img} alt={alt} className="card-img" />
        </div>
        <div className="card-text-container">
          <h3 className="card-text">{text}</h3>
        </div>
      </div>
    </>
  );
}

export default card;
