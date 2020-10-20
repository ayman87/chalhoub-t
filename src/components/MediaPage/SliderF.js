import React from "react";
import "./SliderF.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Section from "../Section";
import { MediaObjOne } from "./Data";
import { MediaObjTwo } from "./Data";
import { MediaObjThree } from "./Data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BsChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
}
function SliderF() {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Section {...MediaObjOne} />
        </div>
        <div>
          <Section {...MediaObjTwo} />
        </div>
        <div>
          <Section {...MediaObjThree} />
        </div>
      </Slider>
    </div>
  );
}

export default SliderF;
