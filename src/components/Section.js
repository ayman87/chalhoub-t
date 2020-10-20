import React from "react";
import "./Section.css";
import learnMoreArrow from "../images/learnMoreArrow.png";
import useWindowSize from "../Hooks/WindowSize";

function Section({
  heading,
  subHeading,
  desc,
  descTwo,
  rad,
  img,
  alt,
  imgStart,
}) {
  const size = useWindowSize();

  let section;
  const showMob = () => {
    if (size.width <= 450) {
      section = (
        <div className="section-container">
          <div className="col section-col">
            <div className="section-header-container">
              <h1 className="section-heading">{heading}</h1>
              <h1 className="section-subHeading">{subHeading}</h1>
            </div>
            <div className="section-img-wrapper">
              <div
                className="section-img-mask"
                style={{
                  borderRadius:
                    rad === "topL"
                      ? "2vw 0 0 0"
                      : rad === "topR"
                      ? "0 2vw 0 0"
                      : rad === "botR"
                      ? "0 0 2vw 0"
                      : rad === "botL"
                      ? "0 0 0 2vw"
                      : "",
                }}
              />
              <img src={img} alt={alt} className="section-img" />
            </div>
            <p className="section-description">{desc}</p>
            <p className="section-description section-description-two">
              {descTwo}
            </p>
            <button className="section-btn">
              LEARN MORE
              <img className="btn-img" src={learnMoreArrow} alt="arrow" />
            </button>
          </div>
        </div>
      );
    } else {
      section = (
        <div className="section-container">
          <div
            className="row section-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row" : "row-reverse",
            }}
          >
            <div className="col">
              <div className="section-text-wrapper">
                <h1 className="section-heading">{heading}</h1>
                <h1 className="section-subHeading">{subHeading}</h1>
                <p className="section-description">{desc}</p>
                <p className="section-description section-description-two">
                  {descTwo}
                </p>
                <button className="section-btn">
                  LEARN MORE
                  <img className="btn-img" src={learnMoreArrow} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="col">
              <div className="section-img-wrapper">
                <div
                  className="section-img-mask"
                  style={{
                    borderRadius:
                      rad === "topL"
                        ? "2vw 0 0 0"
                        : rad === "topR"
                        ? "0 2vw 0 0"
                        : rad === "botR"
                        ? "0 0 2vw 0"
                        : rad === "botL"
                        ? "0 0 0 2vw"
                        : "",
                  }}
                />
                <img src={img} alt={alt} className="section-img" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  showMob();
  return <>{section}</>;
}

export default Section;
