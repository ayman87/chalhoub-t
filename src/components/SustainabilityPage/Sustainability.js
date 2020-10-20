import React from "react";
import "./Sustainability.css";
import Slider from "./SliderE";

function Sustainability() {
  return (
    <>
      <div className="sustainability__section-container">
        <div className="sustainabilty__section-text-wrapper">
          <div className="sustainability__section-header">
            <h1>SUSTAINABILITY</h1>
          </div>
          <div className="sustainability__section-subheader">
            <p>
              For over 60 years, we have been fortunate to be part of this
              region, to develop our people, our knowledge and our business.
              Today, we look at the future and aim to continue developing our
              business in a sustainable way. Our strategy focuses on four areas
              where we can make the biggest difference:
            </p>
            <p className="sustainability__section-subtext">
              People, Partners, Planet, Impact
            </p>
          </div>
        </div>
        <div className="sustainability__section-slider-container">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Sustainability;
