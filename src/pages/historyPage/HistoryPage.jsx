import React from "react";
import HeaderUp from "../../components/home/header/headerUp/HeaderUp";
import { Footer } from "../../components/home";
import History from "../../components/history/History";
import "./HistoryPage.css";

const HistoryPage = () => {
  return (
    <div className="historyPage">
      <History />
      <Footer />
    </div>
  );
};

export default HistoryPage;
