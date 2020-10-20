import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import { ImFacebook, ImLinkedin, ImTwitter, ImYoutube } from "react-icons/im";
function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-links-container">
          <div className="footer-links-left custom-border">
            <span>Our Group</span>
            <ul>
              <li>About Chalhoub Group</li>
              <li>Chalhoub Group</li>
              <li>Sustainablility</li>
              <li>Media</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-links-right">
            <span>Our Activities</span>
            <ul>
              <li>Beauty</li>
              <li>Fashion &amp; Accessories</li>
              <li>Ventures</li>
              <li>Our Own Concepts</li>
              <li>Our Own Brands</li>
              <li>Communications</li>
            </ul>
          </div>
        </div>
        <div className="footer-subscribe">
          <div className="footer-subscribe-header">
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div className="footer-subscribe-input">
            <label htmlFor="subscribe"></label>
            <input
              id="subscribe"
              placeholder="Your email address"
              type="text"
            />
            <button className="subscribe">SUBSCRIBE</button>
          </div>
          <div className="footer-subscribe-smedia-container">
            <div className="footer-subscribe-smedia-header">
              Follow us on social media
            </div>
            <ul className="footer-subscribe-smedia-links">
              <li>
                <ImFacebook />
              </li>
              <li>
                <ImTwitter />
              </li>
              <li>
                <ImYoutube />
              </li>
              <li>
                <ImLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-container">
          <div className="copyright-left">
            Copyright &copy; 2020 AYMOON GROUP,&nbsp;&nbsp;All rights reserved.
          </div>
          <div className="copyright-right">
            <span>LEGAL NOTICE</span>
            <span>PRIVACY NOTICE</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
