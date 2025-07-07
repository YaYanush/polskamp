import React from "react";
import "./Footer.css";
import { Logo } from "../../../img";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerMain">
        <div className="footerLeft">
          <div className="img_footer">
            <img src={Logo} alt="Polskamp logo" />
          </div>
        </div>
        <div className="footerRight">
          <h3 className="footerTitle">Dane firmy</h3>
          <p>Polskamp Spółka akcyjna</p>
          <p>ul. Bosmańska 23</p>
          <p>05-462 Duchnów</p>
          <p>Polska</p>
          <p>+48 22 780 25 10</p>
          <p>
          <a href="mailto:polskamp@polskamp.pl">polskamp@polskamp.pl</a>
          </p>
        </div>
      </div>
      <div className="footerBottom">
        © Copyright by Polskamp 2025
      </div>
    </footer>
  );
};

export default Footer;
