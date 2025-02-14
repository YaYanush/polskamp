import React from "react";
import { Footer } from "../../components/home";
import HeaderUp from "../../components/home/header/headerUp/HeaderUp";
import "./ProduktyPages.css";
import { useParams } from "react-router-dom";
import dataProduct from "../../components/product/dataProduct";
import Produkty from "../../components/produkty/Produkty";
import dataCategory from "../../components/product/dataCategory";

const ProduktyPages = () => {
  const { id } = useParams();

  const category = dataCategory.find(
    (category) => category.id === parseInt(id)
  );
  const product = dataProduct.filter((p) => p.idCategory === category.id);

  return (
    <div className="produktyApp">
      <HeaderUp />
      <Produkty product={product} category={category} />
      <Footer />
    </div>
  );
};

export default ProduktyPages;
