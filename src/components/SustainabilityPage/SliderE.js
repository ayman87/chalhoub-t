import React from "react";
import "./SliderE.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import slide1 from "../../images/sustainability2.png";
import slide2 from "../../images/sustainability3.png";
import slide3 from "../../images/sustainability1.png";

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

function SliderE() {
  //   const centerRef = useRef(false);
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: 0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="slide-container">
            <div className="slide-layer1">
              <div className="slide-layer2">
                <div className="slide-layer3">
                  <div
                    className="slide-img"
                    style={{ backgroundImage: "url(" + slide1 + ")" }}
                  >
                    <div className="slide-mask">
                      <h3 className="slide-header">PARTNERS</h3>
                      <div>
                        <p className="slide-desc">
                          Our ambition is to achieve a positive impact across
                          our value chain by working with partners, suppliers
                          and consumers to influence sustainable practices. We
                          value the special relationships we have built with our
                          partners over the 60 years of running our business.
                        </p>
                        <span className="slide-link">Learn more</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-container">
            <div className="slide-layer1">
              <div className="slide-layer2">
                <div className="slide-layer3">
                  <div
                    className="slide-img"
                    style={{ backgroundImage: "url(" + slide2 + ")" }}
                  >
                    <div className="slide-mask">
                      <h3 className="slide-header">PLANET</h3>
                      <p className="slide-desc">
                        Our ambition is to achieve a positive impact across our
                        value chain by working with partners, suppliers and
                        consumers to influence sustainable practices. We value
                        the special relationships we have built with our
                        partners over the 60 years of running our business.
                      </p>
                      <span className="slide-link">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-container">
            <div className="slide-layer1">
              <div className="slide-layer2">
                <div className="slide-layer3">
                  <div
                    className="slide-img"
                    style={{ backgroundImage: "url(" + slide3 + ")" }}
                  >
                    <div className="slide-mask">
                      <h3 className="slide-header">PEOPLE</h3>
                      <p className="slide-desc">
                        Our ambition is to achieve a positive impact across our
                        value chain by working with partners, suppliers and
                        consumers to influence sustainable practices. We value
                        the special relationships we have built with our
                        partners over the 60 years of running our business.
                      </p>
                      <span className="slide-link">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-container">
            <div className="slide-layer1">
              <div className="slide-layer2">
                <div className="slide-layer3">
                  <div
                    className="slide-img"
                    style={{ backgroundImage: "url(" + slide3 + ")" }}
                  >
                    <div className="slide-mask">
                      <h3 className="slide-header">PEOPLE</h3>
                      <p className="slide-desc">
                        Our ambition is to achieve a positive impact across our
                        value chain by working with partners, suppliers and
                        consumers to influence sustainable practices. We value
                        the special relationships we have built with our
                        partners over the 60 years of running our business.
                      </p>
                      <span className="slide-link">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderE;
