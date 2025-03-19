import React from "react";
import ProductInfoHeader from "./productInfoHeader/ProductInfoHeader";
import ProductInfoSkelet from "./productInfoSkelet/ProductInfoSkelet";
import { Footer } from "../home";
import { useParams, Link } from "react-router-dom";
import dataCategory from "./dataCategory";
import dataProduct from "./dataProduct";
import "./ProductInfo.css";

const ProductInfo = () => {
  const { id } = useParams();
  const currentId = parseInt(id);
  const totalCategories = dataCategory.length;

  const category = dataCategory.find((p) => p.id === currentId);
  const product = dataProduct.filter((p) => p.idCategory === category.id);

  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < totalCategories ? currentId + 1 : 1; // Последний ведет на первый

  return (
    <div className="productInfoApp">
      <ProductInfoHeader product={category} />
      <ProductInfoSkelet product={product} />
      <div className="next_section">
        {prevId && (
          <Link to={`/product/${prevId}`} className="category-link">
          <div className="img-container">
            <div style={{color:"white"}}>←</div>
            <div className="text-wrap"> {dataCategory[prevId - 1].title}</div>
            <img src={dataCategory[prevId - 1].img} alt={dataCategory[prevId - 1].title} className="imgLink" />
          </div>
        </Link>
        )}
        <Link to={`/product/${nextId}`}>
          <div className="img-container">
            <div style={{color:"white"}}>→</div>
            <div className="text-wrap">{dataCategory[nextId - 1].title}</div>
            <div><img src={dataCategory[nextId - 1].img} alt={`/product/${prevId}`} className="imgLink"/></div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;
