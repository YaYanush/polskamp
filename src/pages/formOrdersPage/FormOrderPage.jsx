import React from "react";
import HeaderUp from "../../components/home/header/headerUp/HeaderUp";
import { Footer } from "../../components/home";
import FormOrder from "../../components/formOrder/FormOrder";
import "./FormOrderPage.css";

const FormOrderPage = () => {
  return (
    <div className="formOrderPageContainer">
      <HeaderUp />
      <FormOrder />
      <Footer />
    </div>
  );
};

export default FormOrderPage;
