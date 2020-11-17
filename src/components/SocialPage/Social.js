import React from "react";
import "./Social.css";
import Social1 from "../../images/social1.jpg";
import Social2 from "../../images/social2.jpg";
import Social3 from "../../images/social3.jpg";
import Social4 from "../../images/social4.jpg";
import Social5 from "../../images/social5.jpg";
import Social6 from "../../images/social6.jpg";
import Social7 from "../../images/social7.jpg";
import Social8 from "../../images/social8.jpg";
import Social9 from "../../images/social9.jpg";
import Social10 from "../../images/social10.jpg";

function Social() {
  return (
    <>
      <div className="social__section-container">
        <h1 className="social__section-header">SOCIAL MEDIA</h1>
        <div className="social__section-img-container">
          <div className="social__section-img-container-row">
            <div className="social__section-img-container-col">
              <img src={Social1} alt="image1" />
              <img src={Social4} alt="image4" />
              <img src={Social6} alt="image6" />
            </div>
            <div className="social__section-img-container-col">
              <img src={Social2} alt="image2" />
              <img src={Social8} alt="image8" />
              <img src={Social7} alt="image7" />
            </div>
            <div className="social__section-img-container-col">
              <img src={Social3} alt="image3" />
              <img src={Social5} alt="image5" />
              <img src={Social9} alt="image9" />
              <img src={Social10} alt="image10" />
            </div>
          </div>
        </div>
        {/* <div className="social__section-img-container">
          <div
            className="img-tall"
            style={{ backgroundImage: "url(" + Social1 + ")" }}
            alt="image1"
          />
          <div
            className="img-vtall"
            style={{ backgroundImage: "url(" + Social2 + ")" }}
            alt="image2"
          />
          <div
            className="img-wide"
            style={{ backgroundImage: "url(" + Social3 + ")" }}
            alt="image3"
          />
          <div
            className="img-wide"
            style={{ backgroundImage: "url(" + Social4 + ")" }}
            alt="image4"
          />
          <div
            className="img-wide"
            style={{ backgroundImage: "url(" + Social5 + ")" }}
            alt="image5"
          />
          <div
            className="img-vtall"
            style={{ backgroundImage: "url(" + Social6 + ")" }}
            alt="image6"
          />
          <div
            className="img-wide"
            style={{ backgroundImage: "url(" + Social7 + ")" }}
            alt="image7"
          />
          <div
            className="img-tall"
            style={{ backgroundImage: "url(" + Social8 + ")" }}
            alt="image8"
          />
          <div
            className="img-tall"
            style={{ backgroundImage: "url(" + Social9 + ")" }}
            alt="image9"
          />
          <div
            className="img-wide"
            style={{ backgroundImage: "url(" + Social10 + ")" }}
            alt="image10"
          />
        </div> */}
      </div>
    </>
  );
}

export default Social;
