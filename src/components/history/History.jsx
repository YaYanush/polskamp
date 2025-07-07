import React from "react";
import { Historys, SlideFon } from "../../img/index";
import "./History.css";
import { useLanguage } from "../../LanguageContext";

const History = () => {
  const {t} = useLanguage();
  return (
    <div className="historyApp">
      <div className="historyContainer">
        <img className="sliderImg" src={SlideFon} alt="slider" />
        <div className="wrapperTitleFormOrder">
          <h1 className="titleWarpperForm">History</h1>
          <div className="lineWrapperFormOrder" />
        </div>
        <div className="textAreaHistory">
          <div className="container-textArea">
            <p className="pStyleHistory">
            {t("history1")}
          </p>
          <div className="containerImage">
            <img className="historyimg" src={Historys} alt="history" />
          </div>
          <p className="pStyleHistory">
            {t("history2")}
          </p>
          <p className="pStyleHistory">
            {t("history3")}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;