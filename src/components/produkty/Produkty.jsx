import React from "react";
import ProductInfoSkelet from "../product/productInfoSkelet/ProductInfoSkelet";
import "./Produkty.css";

const Produkty = ({ product, category }) => {
  return (
    <div className="produktyApp">
      <div className="produktyContainer">
        <div className="produktyTitle">
          <h1 className="bodyTitle">{category.title}</h1>
        </div>{" "}
      
          <ProductInfoSkelet product={product} />
        
      </div>
    </div>
  );
};

export default Produkty;
