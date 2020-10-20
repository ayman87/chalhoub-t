import React from "react";
import Header from "./Header";
import "./Home.css";
import { AiOutlinePlayCircle } from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home-container">
        <Header />
        <div className="home-header">
          <div className="home-header-tittle">LEADING PARTNERS</div>
          <div className="home-header-sub">
            FOR LUXURY ACROSS THE MIDDLE EAST
          </div>
        </div>
        <div className="home-video">
          <div className="home-watch">WATCH THE VIDEO</div>
          <div className="home-play-button">
            <AiOutlinePlayCircle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
