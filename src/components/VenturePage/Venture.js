import React from "react";
import "./Venture.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import learnMoreArrow from "../../images/learnMoreArrow.png";
import venture from "../../images/venture.jpg";
import Card from "../card";
import { VentureObjOne } from "./Data";
import { VentureObjTwo } from "./Data";
import { VentureObjThree } from "./Data";

function Venture() {
  return (
    <>
      <div className="venture__section-container">
        <div className="venture__section-tabs-wrapper">
          <h1 className="venture__section-header">VENTURE</h1>
          <div className="venture__section-mask"></div>
          <div className="venture__section-tabs-container">
            <Tabs>
              <TabList>
                <Tab>Food &amp; Beverage </Tab>
                <Tab>Wrutung Instruments &amp; Watches</Tab>
                <Tab>Factory Outlet</Tab>
                <Tab>Travel Retail</Tab>
              </TabList>
              <TabPanel>
                <div className="venture__section-tab-img-container">
                  <img
                    src={venture}
                    className="venture__section-tab-img"
                    alt="venture"
                  />
                  <div className="venture__section-tab-text-container">
                    <h2 className="venture__section-tab-text-header">
                      FOOD &amp; BEVERAGE
                    </h2>
                    <p className="venture__section-tab-text-desc">
                      Based on our deep understanding and our presence in the
                      region for over 60 years, we have identified gaps and
                      opportunities allowing us to create innovative concepts,
                      foster strong partnerships, and build successful brands -
                      always making sure to answer the customer’s needs and
                      aspirations.
                    </p>
                    <button className="section-btn">
                      LEARN MORE <img src={learnMoreArrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="venture__section-tab-img-container">
                  <img src={venture} alt="venture" />
                  <div className="venture__section-tab-text-container">
                    <h2 className="venture__section-tab-text-header">
                      WRUTUNG INSTRUMENTS &amp; WATCHES
                    </h2>
                    <p className="venture__section-tab-text-desc">
                      Based on our deep understanding and our presence in the
                      region for over 60 years, we have identified gaps and
                      opportunities allowing us to create innovative concepts,
                      foster strong partnerships, and build successful brands -
                      always making sure to answer the customer’s needs and
                      aspirations.
                    </p>
                    <button className="section-btn">
                      LEARN MORE <img src={learnMoreArrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="venture__section-tab-img-container">
                  <img src={venture} alt="venture" />
                  <div className="venture__section-tab-text-container">
                    <h2 className="venture__section-tab-text-header">
                      FACTORY &amp; OUTLET
                    </h2>
                    <p className="venture__section-tab-text-desc">
                      Based on our deep understanding and our presence in the
                      region for over 60 years, we have identified gaps and
                      opportunities allowing us to create innovative concepts,
                      foster strong partnerships, and build successful brands -
                      always making sure to answer the customer’s needs and
                      aspirations.
                    </p>
                    <button className="section-btn">
                      LEARN MORE <img src={learnMoreArrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="venture__section-tab-img-container">
                  <img src={venture} alt="venture" />
                  <div className="venture__section-tab-text-container">
                    <h2 className="venture__section-tab-text-header">
                      TRAVEL RETAIL
                    </h2>
                    <p className="venture__section-tab-text-desc">
                      Based on our deep understanding and our presence in the
                      region for over 60 years, we have identified gaps and
                      opportunities allowing us to create innovative concepts,
                      foster strong partnerships, and build successful brands -
                      always making sure to answer the customer’s needs and
                      aspirations.
                    </p>
                    <button className="section-btn">
                      LEARN MORE <img src={learnMoreArrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="venture__section-cards">
          <Card {...VentureObjOne} />
          <Card {...VentureObjTwo} />
          <Card {...VentureObjThree} />
        </div>
      </div>
    </>
  );
}

export default Venture;
