import React from "react";
import "./Inputs.css";
import { useLocation } from "react-router-dom";

const Inputs = () => {
  const location = useLocation();

  return (
    <div className="inputContainerFormOrder">
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">First name:</p>
        <input className="inputSkelet" type="text" />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">Second name:</p>
        <input className="inputSkelet" type="text" />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">Company name:</p>
        <input className="inputSkelet" type="text" />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">Phone number:</p>
        <input className="inputSkelet" type="tel" />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">E-mail address:</p>
        <input className="inputSkelet" type="email" />
      </div>
      <div className="inputSkeletApp">
        <p className="nameInputSkelet">
          {location.pathname === "/contactForm"
            ? "Message:"
            : "The content of the order:"}
        </p>
        <textarea className="inputSkelet" type="text" />
      </div>
      <div className="buttonInputs">
        <button className="buttinUnputsMain">Send</button>
      </div>
    </div>
  );
};

export default Inputs;
