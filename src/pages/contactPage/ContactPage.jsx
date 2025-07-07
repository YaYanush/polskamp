import React from "react";
import HeaderUp from "../../components/home/header/headerUp/HeaderUp";
import { Footer } from "../../components/home";
import Contact from "../../components/contact/Contact";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
