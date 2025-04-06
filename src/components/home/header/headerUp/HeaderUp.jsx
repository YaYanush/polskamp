import React, { useState } from "react";
import { Logo } from "../../../../img/index";
import "./HeaderUp.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import dataCategory from "../../../product/dataCategory";

const HeaderUp = () => {
  const [showMenu, setShowMenu] = useState(false);
const [showZakladMenu, setShowZakladMenu] = useState(false); // Independent toggle for ZAKŁAD

const handleToggleZaklad = () => {
  setShowZakladMenu(!showZakladMenu);
};

return (
  <div className="headerUpApp">
    <div className="headerUpContainer">
      <div className="logoContainer">
        <Link to="/">
          <img className="headerUpLogo" src={Logo} alt="logo" />
        </Link>
      </div>

      {/* Burger Menu Button */}
      <div className="burger-container">
        <button
          className="burger-button"
          onClick={() => {
            setShowMenu(!showMenu);
            setShowZakladMenu(false); // Ensure ZAKŁAD menu closes when toggling the burger menu
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Links inside Burger Menu */}
      <div className={`linkHeader ${showMenu ? "show" : ""}`}>

        {/* PRODUKTY Section */}
        <div className="allLinkStyleBlock">
          <p className="linkStyleHeader">PRODUKTY</p>
          <div className="infoLinkStyleBlock">
            {dataCategory.map((category) => (
              <div
                onClick={() => {
                  setShowMenu(false); // Close the entire menu when selecting an item
                }}
                className="wrapperLink"
                key={category.id}
              >
                <Link to={`/product/${category.id}`} className="linkStyleBlock">
                  {category.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ZAMÓWIENIE Link */}
        <Link to={`/formOrder`}>
          <p className="linkStyleHeader">ZAMÓWIENIE</p>
        </Link>

        {/* 🔥 FIXED: ZAKŁAD Section */}
        <div className="allLinkStyleBlock">
          <p className="linkStyleHeader" onClick={handleToggleZaklad}>
            ZAKŁAD
          </p>

          {showZakladMenu && ( // Only show when state is true
            <div className="infoLinkStyleBlock">
              <div className="wrapperLink">
                <Link
                  to="/history"
                  className="linkStyleBlock"
                  onClick={() => {
                    setShowMenu(false); 
                    setShowZakladMenu(false);
                  }}
                >
                  History
                </Link>
              </div>
              <div className="wrapperLink">
                <Link
                  to="/technology"
                  className="linkStyleBlock"
                  onClick={() => {
                    setShowMenu(false); 
                    setShowZakladMenu(false);
                  }}
                >
                  Technology
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* KONTAKT Link */}
        <Link to="/contactForm">
          <p className="linkStyleHeader" onClick={() => setShowMenu(false)}>KONTAKT</p>
        </Link>
      </div>
    </div>
  </div>
);

};

export default HeaderUp;
