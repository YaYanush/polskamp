import React from "react";
import { ChickenMeet, Bacground } from "../../../../img/index";
import "./HeaderDown.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../LanguageContext";


const HeaderDown = () => {

  const { t } = useLanguage();
  return (
    <div className="headerDownApp">
        <div className="headerDownLeftPath">
          <div className="headerLeft">
            <div className="headerLeftTitle">
              <h1 className="headerLeftTitleH1">
                {t("leader_of")}
              </h1>
            </div>
            <div className="headerLeftFooter">
              <div className="card">
                <div className="center-container">
                  <h3 className="headerLeftFooterTitile">{t("msm_feature")}</h3>
                </div>
              <div className="headerLeftFooterInfo">
                <Link to={`/product/1`}>
                <div>
                  <img
                    className="headerLeftFooterImg"
                    src={ChickenMeet}
                    alt="chickenMeet"
                  /> 
                </div>
                </Link>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerRight">
          <img className="headerRightBack" src={Bacground} alt="bacgroungImg" />
        </div>
    </div>
  );
};

export default HeaderDown;
