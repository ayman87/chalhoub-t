import React from "react";
import "./Media.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "./SliderF";
function Media() {
  return (
    <>
      <div className="media__section-container">
        <h1 className="media__section-header">MEDIA LIBRARY</h1>
        <div className="media__section-tabs-container">
          <Tabs>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Press Releases</Tab>
              <Tab>Events</Tab>
            </TabList>
            <TabPanel>
              <Slider />
            </TabPanel>
            <TabPanel>
              <Slider />
            </TabPanel>
            <TabPanel>
              <Slider />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Media;
