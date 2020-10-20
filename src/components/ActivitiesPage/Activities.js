import React from "react";
import Section from "../Section";
import { ActivitiesObjOne } from "./Data";
import { ActivitiesObjTwo } from "./Data";
import "./Activities.css";

function Activities() {
  return (
    <>
      <div className="activities__section-container">
        <div className="activities__section-header">
          <h1>ACTIVITIES</h1>
        </div>
        <div className="activities__section-subheader">
          <h2>
            The Group is moving fast from a traditional distributor and retailer
            for luxury in the Middle East to a hybrid retailer bringing luxury
            experiences to the fingertips of customers everywhere.
          </h2>
        </div>
        <Section {...ActivitiesObjOne} />
        <Section {...ActivitiesObjTwo} />
      </div>
    </>
  );
}

export default Activities;
