import React from "react";
import HeaderUp from "../../components/home/header/headerUp/HeaderUp";
import Technology from "../../components/technology/Technology";
import { Footer } from "../../components/home";
import "./TechnologyPage.css";

const TechnologyPage = () => {
  return (
    <div className="technologyPage">
      <Technology />
      <Footer />
    </div>
  );
};

export default TechnologyPage;
