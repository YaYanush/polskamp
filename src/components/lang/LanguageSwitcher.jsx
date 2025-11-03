import React, { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import { FaChevronDown } from "react-icons/fa";
import "./LanguageSwitcher.css";

const languages = {
  pl: {
    label: "Polski",
    flag: "https://flagcdn.com/w40/pl.png",
  },
  en: {
    label: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  es: {
    label: "Español",
    flag: "https://flagcdn.com/w40/es.png",
  },
};

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleChange = (lang) => {
    changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="langSwitcherContainer">
      <button className="langSwitcherButton" onClick={toggleDropdown}>
        <img
          src={languages[language].flag}
          alt={language}
          className="langFlag"
        />
        <FaChevronDown style={{ marginLeft: 6 }} />
      </button>

      {open && (
        <ul className="langDropdown">
          {Object.entries(languages).map(([code, { label, flag }]) => (
            code !== language && (
              <li key={code} onClick={() => handleChange(code)}>
                <img src={flag} alt={code} className="langFlagSmall" />
                {label}
              </li>
            )
          ))}
        </ul>
      )}
    </div>
  );
};
