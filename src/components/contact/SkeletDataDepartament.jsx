import React from "react";
import "./Contact.css";

const SkeletDataDepartament = ({ name, line1, line2, line3 }) => {
  return (
    <div className="settingLeftGridTitle">
      <div className="leftGridContainertitle">
        <h3 className="titleContainerH3">{name}</h3>
      </div>
      <div className="lineContainerGrid">
        <p className="txtLineContainer">{line1}</p>
        <p className="txtLineContainer">{line2}</p>
        <p className="txtLineContainer">{line3}</p>
      </div>
    </div>
  );
};

export default SkeletDataDepartament;
