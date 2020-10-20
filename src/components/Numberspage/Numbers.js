import React from "react";
import Slider from "./SliderB";
import "./Numbers.css";
function Numbers() {
  return (
    <>
      <div className="numbers__section-container">
        <div className="number__section-header">
          <h1>CHALHOUB</h1>
          <h2>IN NUMBERS</h2>
        </div>
        <Slider />
      </div>
    </>
  );
}

export default Numbers;
