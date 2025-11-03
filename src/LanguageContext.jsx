// src/LanguageContext.js

import { createContext, useState, useContext } from "react";
import { translations } from "./locales";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const defaultLang = localStorage.getItem("lang") || "en" || "es" || "pl";
  const [language, setLanguage] = useState(defaultLang);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для удобного доступа
export const useLanguage = () => useContext(LanguageContext);
