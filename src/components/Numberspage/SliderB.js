import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderB.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import slide1 from "../../images/numbers1.png";
import slide2 from "../../images/numbers2.png";
import slide3 from "../../images/numbers3.png";

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
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={slide1} alt="slide1" />
            <h3>1955</h3>
            <h4>ESTABLISHED</h4>
          </div>
          <div>
            <img src={slide2} alt="slide2" />
            <span>750</span>
            <span className="slide-toptext">+</span>
            <h4>RETAIL OUTLET</h4>
            <h4>ACROSS THE REGION</h4>
          </div>
          <div>
            <img src={slide3} alt="slide3" />
            <span>76k</span>
            <span className="slide-subtext">sqm</span>
            <h4>WAREHOUSE SPACE</h4>
          </div>
          <div>
            <img src={slide1} alt="slide1" />
          </div>
          <div>
            <img src={slide2} alt="slide2" />
          </div>
          <div>
            <img src={slide3} alt="slide3" />
          </div>
          <div>
            <img src={slide1} alt="slide1" />
          </div>
          <div>
            <img src={slide2} alt="slide2" />
          </div>
          <div>
            <img src={slide3} alt="slide3" />
          </div>
        </Slider>
      </div>
    );
  }
}
