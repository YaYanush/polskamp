import React from "react";
import {
  OptionIcon1,
  OptionIcon2,
  OptionIcon3,
  OptionIcon4,
} from "../../../img";
import "./ProductInfoSkelet.css";
import Slider from "../../slider/Slider";



const ProductInfoSkelet = ({ product }) => {
  return (
    <>
      {product.map((product) => (
        <div className="productInfoSkeletApp">
          <div className="title_product">{product.nameCategory}</div>
          <div className="slider_container">
            <Slider images={product.imgCategory} />
          </div>
          
        </div>
      ))}{" "}
    </>
  );
};

export default ProductInfoSkelet;
