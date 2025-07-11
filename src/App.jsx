import React from "react";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import ProduktyPages from "./pages/produktyPages/ProduktyPages";
import FormOrderPage from "./pages/formOrdersPage/FormOrderPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HistoryPage from "./pages/historyPage/HistoryPage";
import TechnologyPage from "./pages/technologyPage/TechnologyPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {LanguageSwitcher} from "../src/components/lang/LanguageSwitcher"
import Navbar from "./components/navbar/Navbar"
import PdfViewer from "./components/pdf/PdfViewer";

const App = () => {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/formOrder" element={<FormOrderPage />} />
        <Route path="/contactForm" element={<ContactPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/catalogs" element={<PdfViewer />} />
      </Routes>
    </>
  );
};

export default App;
