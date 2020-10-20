import React from "react";
import "./App.css";
import Home from "./components/Home";
import SectionA from "./components/Homepage/Home";
import SectionB from "./components/Numberspage/Numbers";
import SectionC from "./components/ActivitiesPage/Activities";
import SectionD from "./components/VenturePage/Venture";
import SectionE from "./components/SustainabilityPage/Sustainability";
import SectionF from "./components/MediaPage/Media";
import SectionG from "./components/SocialPage/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <SectionG />
      <Footer />
    </div>
  );
}

export default App;
