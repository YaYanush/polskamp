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
  const nextId = currentId < totalCategories ? currentId + 1 : 1; // Last category loops to the first

  return (
    <div className="productInfoApp">
      <ProductInfoHeader product={category} />
      <ProductInfoSkelet product={product} />

      <div className="pagination-container">
        {prevId && (
          <Link to={`/product/${prevId}`} className="arrow left-arrow">
            &#10094; {/* Left Arrow (←) */}
          </Link>
        )}

        <div className="next_section">
          {prevId && (
            <Link to={`/product/${prevId}`} className="category-link">
              <div className="img-container">
                <div className="text-wrap">{dataCategory[prevId - 1].title}</div>
                <img
                  src={dataCategory[prevId - 1].img}
                  alt={dataCategory[prevId - 1].title}
                  className="imgLink"
                />
              </div>
            </Link>
          )}
          <Link to={`/product/${nextId}`} className="category-link">
            <div className="img-container">
              <div className="text-wrap">{dataCategory[nextId - 1].title}</div>
              <img
                src={dataCategory[nextId - 1].img}
                alt={`/product/${prevId}`}
                className="imgLink"
              />
            </div>
          </Link>
        </div>

        <Link to={`/product/${nextId}`} className="arrow right-arrow">
          &#10095; {/* Right Arrow (→) */}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ProductInfo;
