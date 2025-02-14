import React from "react";
import "./HomePage.css";
import { Footer, Header, BodyOnePage } from "../../components/home";

const HomePage = () => {
  return (
    <div className="appHomePage">
      <div className="containerAppHomePage">
        <Header />
        <BodyOnePage />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
