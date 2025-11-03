import React from "react";
import { SlideFon, TechnologyFon } from "../../img";
import mp4 from "../../img/video.mp4"
import Film from "../../components/video/Film"
import { useLanguage } from "../../LanguageContext";

const Technology = () => {
  const {t} = useLanguage()
  return (
    <div className="historyApp">
      <div className="historyContainer">
        <img className="sliderImg" src={SlideFon} alt="slider" />
        <div className="wrapperTitleFormOrder">
          <h1 className="titleWarpperForm">Technology</h1>
          <div className="lineWrapperFormOrder" />
        </div>
        <Film videoSrc={mp4}>

        </Film>
        <div className="textAreaHistory">
          <p className="pStyleHistory">
            {t("tech1")}
          </p>
          <div className="containerImage">
            <img className="historyimg" src={TechnologyFon} alt="history" />
          </div>
          <p className="pStyleHistory">
            {t("tech2")}
          </p>
          <p className="pStyleHistory">
            {t("tech3")}
          </p>
          <p className="pStyleHistory">
            {t("tech4")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;