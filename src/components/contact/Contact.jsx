import React from "react";
import { map } from "../../img";
import SkeletDataDepartament from "./SkeletDataDepartament";
import Inputs from "../formOrder/Inputs/Inputs";
import Map from "../map/Map"
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactApp">
        <div className="map-holder">
          <Map />
        </div>
        <div className="wrapperTitleFormOrder">
          <h1 className="titleWarpperForm">Contact</h1>
          <div className="lineWrapperFormOrder" />
        </div>
        <div className="gridContainerApp">
          <div className="leftGridContainer">
            <SkeletDataDepartament
              name="Address of factory"
              line1="05-462 Duchnów"
              line2="ul. Bosmańska 23"
              line3="Polska"
            />
            <SkeletDataDepartament
              name="Secretariat"
              line1="tel: + 48 22 780 25 00"
              line2="fax: +48 22 780 25 25"
              line3="polskamp@polskamp.pl"
            />
            <SkeletDataDepartament
              name="Trade department"
              line1="tel: +48 22 780 25 10"
              line2="fax: +48 22 780 25 25"
              line3="handel@polskamp.pl"
            />
            <SkeletDataDepartament
              name="Finanses"
              line1="tel: +48 22 780 25 20"
              line2="fax: +48 22 780 25 25"
              line3="finanse@polskamp.pl"
            />
          </div>
          
          <div className="rightGridContainer">
            <Inputs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
