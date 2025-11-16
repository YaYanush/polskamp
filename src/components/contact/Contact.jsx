import React from "react";
import { useLanguage } from "../../LanguageContext";
import Map from "../map/Map";
import Inputs from "../formOrder/Inputs/Inputs";
import SkeletDataDepartament from "./SkeletDataDepartament";

import "./Contact.css";

const contactData = [
  {
    namePL: "Adres fabryki",
    nameEN: "Address of factory",
    nameES: "Dirección de la fábrica",

    line1PL: "05-462 Duchnów",
    line1EN: "05-462 Duchnów",
    line1ES: "05-462 Duchnów",

    line2PL: "ul. Bosmańska 23",
    line2EN: "ul. Bosmańska 23",
    line2ES: "ul. Bosmańska 23",

    line3PL: "Polska",
    line3EN: "Poland",
    line3ES: "Polonia",
  },
  {
    namePL: "Sekretariat",
    nameEN: "Secretariat",
    nameES: "Secretaría",

    line1PL: "tel: +48 22 780 25 00",
    line1EN: "tel: +48 22 780 25 00",
    line1ES: "tel: +48 22 780 25 00",

    line2PL: "fax: +48 22 780 25 25",
    line2EN: "fax: +48 22 780 25 25",
    line2ES: "fax: +48 22 780 25 25",

    line3PL: "polskamp@polskamp.pl",
    line3EN: "polskamp@polskamp.pl",
    line3ES: "polskamp@polskamp.pl",
  },
  {
    namePL: "Dział handlowy",
    nameEN: "Trade department",
    nameES: "Departamento comercial",

    line1PL: "tel: +48 22 780 25 10",
    line1EN: "tel: +48 22 780 25 10",
    line1ES: "tel: +48 22 780 25 10",

    line2PL: "fax: +48 22 780 25 25",
    line2EN: "fax: +48 22 780 25 25",
    line2ES: "fax: +48 22 780 25 25",

    line3PL: "handel@polskamp.pl",
    line3EN: "handel@polskamp.pl",
    line3ES: "handel@polskamp.pl",
  },
  {
    namePL: "Finanse",
    nameEN: "Finances",
    nameES: "Finanzas",

    line1PL: "tel: +48 22 780 25 20",
    line1EN: "tel: +48 22 780 25 20",
    line1ES: "tel: +48 22 780 25 20",

    line2PL: "fax: +48 22 780 25 25",
    line2EN: "fax: +48 22 780 25 25",
    line2ES: "fax: +48 22 780 25 25",

    line3PL: "finanse@polskamp.pl",
    line3EN: "finanse@polskamp.pl",
    line3ES: "finanse@polskamp.pl",
  },
];

const Contact = () => {
  const { t, language } = useLanguage();
  const lang = language.toUpperCase(); // "PL" | "EN" | "ES"

  return (
    <div className="contactContainer">
      <div className="contactApp">
        
        <div className="map-holder">
          <Map />
        </div>

        <div className="wrapperTitleFormOrder">
          <h1 className="titleWarpperForm">{t("contact")}</h1>
          <div className="lineWrapperFormOrder" />
        </div>

      
        <div className="gridContainerApp">
          
       
          <div className="leftGridContainer">
            {contactData.map((item, index) => (
              <SkeletDataDepartament
                key={index}
                name={item[`name${lang}`]}
                line1={item[`line1${lang}`]}
                line2={item[`line2${lang}`]}
                line3={item[`line3${lang}`]}
              />
            ))}
          </div>

         
          <div className="rightGridContainer">
            <Inputs />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
