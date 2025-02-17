import React, { useState } from "react";
import { Logo } from "../../../../img/index";
import "./HeaderUp.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import dataCategory from "../../../product/dataCategory";

const HeaderUp = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="headerUpApp">
      <div className="headerUpContainer">
        <div className="logoContainer">
          <Link to="/">
            <img className="headerUpLogo" src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="burger-container">
          <button
            className="burger-button"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={`linkHeader ${showMenu && "show"}`}>
          <div className="allLinkStyleBlock">
            <p className="linkStyleHeader">PRODUKTY</p>

            <div className="infoLinkStyleBlock">
              {dataCategory.map((category) => (
                <>
                  <div onClick={() => setShowMenu(!showMenu)} className="wrapperLink" key={category.id}>
                    <Link
                      to={`/product/${category.id}`}
                      className="linkStyleBlock"
                    >
                      {category.title}
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>

          <p className="linkStyleHeader">ZEZWOLENIA</p>
          <Link to={`/formOrder`}>
            <p className="linkStyleHeader">ZAMÓWIENIE</p>
          </Link>
          <div className="allLinkStyleBlock">
            <p className="linkStyleHeader">ZAKŁAD</p>

            <div className="infoLinkStyleBlock">
              <div className="wrapperLink">
                <Link to="/history" className="linkStyleBlock">
                  History
                </Link>
              </div>
              <div className="wrapperLink">
                <Link to="/technology" className="linkStyleBlock">
                  Technology
                </Link>
              </div>
            </div>
          </div>
          <Link to="/contactForm">
            <p className="linkStyleHeader">KONTAKT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderUp;
