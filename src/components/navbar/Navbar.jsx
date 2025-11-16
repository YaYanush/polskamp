import React, { useState } from "react";
import { Logo } from "../../img/index"
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import dataCategory from "../../components/product/dataCategory"
import { useLanguage } from "../../LanguageContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenu((prev) => (prev === key ? null : key));
  };

  const { t,language  } = useLanguage();

  return (
    <header className="header-up">
      <div className="header-up__container">
      <div className="logoContainer">
        <Link to="/" className="header-up__logo">
          <img className="headerUpLogo" src={Logo} alt="Polskamp Logo" />
        </Link>
      </div>  

        {/* Mobile Burger Button */}
        <button className="burger-btn" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <div className="nav-item">
            <span className="nav-link">{t("products")}</span>
            <div className="nav-submenu">
              {dataCategory.map((cat) => (
                <Link key={cat.id} to={`/product/${cat.id}`} className="submenu-link">
                  {cat["title" + language.toUpperCase()]}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-link">{t("factory")}</span>
            <div className="nav-submenu">
              <Link to="/history" className="submenu-link">{t("history")}</Link>
              <Link to="/technology" className="submenu-link">{t("technology")}</Link>
            </div>
          </div>

          <Link to="/contactForm" className="nav-link">{t("contact")}</Link>
          <Link to="/catalogs" className="nav-link">{t("catalogs")}</Link>
        </nav>

        {/* Mobile Nav Menu */}
        <nav className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="burger-item">
            <p className="burger-link" onClick={() => toggleSubmenu("produkty")}>{t("products")}</p>
            {openSubmenu === "produkty" && (
              <div className="submenu">
                {dataCategory.map((cat) => (
                  <Link key={cat.id} to={`/product/${cat.id}`} className="submenu-link" onClick={toggleMenu}>
                    {cat["title" + language.toUpperCase()]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="burger-item">
            <p className="burger-link" onClick={() => toggleSubmenu("zaklad")}>{t("factory")}</p>
            {openSubmenu === "zaklad" && (
              <div className="submenu">
                <Link to="/history" className="submenu-link" onClick={toggleMenu}>{t("history")}</Link>
                <Link to="/technology" className="submenu-link" onClick={toggleMenu}>{t("technology")}</Link>
              </div>
            )}
          </div>

          <Link to="/contactForm" className="burger-link" onClick={toggleMenu}>{t("contact")}</Link>
          <Link to="/catalogs" className="burger-link" onClick={toggleMenu}>{t("catalogs")}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;