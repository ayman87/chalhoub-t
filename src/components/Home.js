import React from "react";
import Header from "./Header";
import "./Home.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import useDataApi from "../Hooks/FetchData";
function Home() {
  const [stateApi] = useDataApi("http://localhost:8000/api/banners/homebg", [
    {},
  ]);
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(0, 0, 0, 0.20772058823529416) 0%,rgba(0, 0, 0, 1) 94%)," +
            "url(http://localhost:8000/uploads/images/" +
            stateApi.data.desktop_image +
            ")",
        }}
      >
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
