import React from "react";
import Inputs from "./Inputs/Inputs";
import "./FormOrder.css";

const FormOrder = () => {
  return (
    <div className="formOrderApp">
      <div className="formOrderContainer">
        <div className="mainFormOrder">
          <div className="wrapperTitleFormOrder">
            <h1 className="titleWarpperForm">Order</h1>
            <div className="lineWrapperFormOrder" />
            <h3 className="txtTitleWrapper">
              Please refer to our general terms of cooperation and supplies:
              General Terms and cooperation
            </h3>
          </div>
          <div className="settingInputs">
            <Inputs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOrder;
