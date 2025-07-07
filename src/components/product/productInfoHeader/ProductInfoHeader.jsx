import React from "react";
import "./ProductInfoHeader.css";
import { useLanguage } from "../../../LanguageContext";
import { motion } from "framer-motion";

const ProductInfoHeader = ({ product }) => {
  const { language } = useLanguage();

  return (
    <div className="product-info-wrapper" key={product.id}>
      <h1 className="product-title">
        {product[`title${language.toUpperCase()}`]}
      </h1>

      <div className="product-content">
        <motion.div
          key={`img-${product.id}`}
          className="product-image-box"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.2,
          }}
        >
          <img src={product.img} alt="product" className="product-image" />
        </motion.div>

        <motion.div
          key={`desc-${product.id}`}
          className="product-description-box"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: 0.4,
          }}
        >
          <p className="product-description">
            {product[`desc${language.toUpperCase()}`]}
          </p>
        </motion.div>
      </div>

      <div className="product-line" />
    </div>
  );
};

export default ProductInfoHeader;
