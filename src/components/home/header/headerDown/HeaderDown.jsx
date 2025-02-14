import React from "react";
import { ChickenMeet, Bacground } from "../../../../img/index";
import "./HeaderDown.css";

const HeaderDown = () => {
  return (
    <div className="headerDownApp">
      <div className="headerDownContainer">
        <div className="headerDownLeftPath">
          <div className="headerLeft">
            <div className="headerLeftTitle">
              <h1 className="headerLeftTitleH1">
                LIDER PRODUKCJI FARSZU DROBIOWEGO
              </h1>
            </div>
            <div className="headerLeftFooter">
              <div className="card">
              <div className="center-container">
                <h3 className="headerLeftFooterTitile">Our Feature Product!</h3>
              </div>
              <div className="headerLeftFooterInfo">
                <div>
                  <img
                    className="headerLeftFooterImg"
                    src={ChickenMeet}
                    alt="chickenMeet"
                  /> 
                </div>
                
                <div className="headerLeftFooterLine" />
                <div className="headerLeftFooterMainInfo">
                  <h3 className="mainInfoTitile">MDM</h3>
                  <p className="mainInfoTxt">
                    Mechanically separated chicken meat, also known as MDM, with
                    a fine structure
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerRight">
          <img className="headerRightBacg" src={Bacground} alt="bacgroungImg" />
        </div>
      </div>
    </div>
  );
};

export default HeaderDown;
