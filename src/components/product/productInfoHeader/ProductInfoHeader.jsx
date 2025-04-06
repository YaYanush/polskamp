import React from "react";
import "./ProductInfoHeader.css";

const ProductInfoHeader = ({ product }) => {
  return (
    <div className="productInfoHeaderApp">
      <h1 className="productInfoHeaderTitile">{product.title}</h1>
      <div className="productInfoHeaderContainer">
        <div className="productBorderBox">
          <img className="productImgBox" src={`${product.img}`} alt="product" />
        </div>
        <div className="productTextContainer">
          <p className="productText">{product.desc}</p>
        </div>
      </div>
      <div className="lineProduct" />
    </div>
  );
};

export default ProductInfoHeader;
