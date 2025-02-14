import React from "react";
import { Logo, WhatSapp } from "../../../img/index";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerApp">
      <div className="footerContainer">
        <div className="gridFooterInfo">
          <div className="leftInfoFooter">
            
            <p className="adress">Warszawa, ul. Bosmańska </p>
            <div className="phoneContainer">
              <img className="whatsapp" src={WhatSapp} alt="whatsapp" />
              <p className="phone">0811 111 111 111</p>
            </div>
          </div>
          <div className="centerFooterInfo">
            <h3 className="footerTitleInfoCenter">PRODUKTY</h3>
            <p className="centerFooterTxt">Farsz drobiowy</p>
            <div className="lineFooterCenter" />
            <p className="centerFooterTxt">Pokarm dla zwierząt</p>
          </div>
          <div className="rightFooterTxt">
            <h3 className="footerTitleInfoCenter">Kontakt</h3>
            <p className="centerFooterTxt">Formularz zamówieniowy</p>
            <div className="lineFooterCenter" />
            <p className="centerFooterTxt">Formularz kontaktowy</p>
          </div>
        </div>
        <div className="containerAllLineFooter">
          <div className="allLineFooter" />
          <div className="downLineFooter">
            <p className="downLineTxt">© 2025 All Rights Reserved</p>
            <p className="downLineTxt">Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
