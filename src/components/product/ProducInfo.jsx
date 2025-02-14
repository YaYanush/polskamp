import React from "react";
import ProductInfoHeader from "./productInfoHeader/ProductInfoHeader";
import ProductInfoSkelet from "./productInfoSkelet/ProductInfoSkelet";
import { Footer } from "../home";
import { useParams } from "react-router-dom";
import dataCategory from "./dataCategory";
import "./ProductInfo.css";
import dataProduct from "./dataProduct";

const ProducInfo = () => {
  const { id } = useParams();

  const category = dataCategory.find((p) => p.id === parseInt(id));
  const product = dataProduct.filter((p) => p.idCategory === category.id);

  return (
    <div className="productInfoApp">
      <ProductInfoHeader product={category} />
      <ProductInfoSkelet product={product} />
      <Footer />
    </div>
  );
};

export default ProducInfo;
