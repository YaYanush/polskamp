import React from "react";
import Slider from "../../slider/Slider";
import "./ProductInfoSkelet.css";
import { useLanguage } from "../../../LanguageContext";
import { motion } from "framer-motion";

const ProductInfoSkeletImg = ({ product }) => {
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
           </div> 
        </motion.div>
      ))}
    </>
  );
};

export default ProductInfoSkeletImg;
