import React from "react";
import Slider from "../../slider/Slider";
import "./ProductInfoSkelet.css";
import { useLanguage } from "../../../LanguageContext";
import { motion } from "framer-motion";

const ProductInfoSkelet = ({ product }) => {
  const { language } = useLanguage();

  return (
    <>
      {product.map((product) => (
        <motion.div
          className="productInfoSkeletApp"
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 12,
            delay: 0.15,
          }}
        >
          <div className="title_product">
            {product[`nameCategory${language.toUpperCase()}`]}
          </div>
          <div className="slider_and_specs">
            <div className="slider_container">
              <Slider images={product.imgCategory} />
            </div>
            <div className="specs_container">
              <div className="spec_block">
                <div className="spec"></div>
                <h1 className="spec_title">
                  {product.idCategory === 1
                    ? "Chemical Analyses"
                    : "Nutritional Value (per 100g)"}
                </h1>
                <p className="spec_text">
                  {product[`textValue${language.toUpperCase()}`]}
                </p>
              </div>
              <div className="spec_block">
                <h1 className="spec_title">
                  {product.idCategory === 1
                    ? "Blocks"
                    : "Single Package Sizes"}
                </h1>
                <p className="spec_text">
                  {product[`textPackage${language.toUpperCase()}`]}
                </p>
              </div>
              <div className="spec_block">
                <h1 className="spec_title">Collective packaging</h1>
                <p className="spec_text">
                  {product[`textPackaging${language.toUpperCase()}`]}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProductInfoSkelet;
