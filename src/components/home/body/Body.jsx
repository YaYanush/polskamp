import React from "react";
import SkeletCart from "./skeletCart/SkeletCart";
import Carousel from '../../carousel/Carousel'
import Map from '../../map/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Film from '../../video/Film'
import mp4 from '../../../img/video.mp4'
import { motion } from "framer-motion";
import { useLanguage } from "../../../LanguageContext";
import ProductInfoSkelet  from "../../product/productInfoSkelet/ProductInfoSkelet";
import dataProduct from "../../product/dataProduct";

import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Polyblocks,
  Cartons,
  Quality,
  Halal,
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7,
} from "../../../img/index";
import "./Body.css";

const Body = () => {
  const methods = [
    { name: "Polyblocks", image: Polyblocks },
    { name: "Cartons", image: Cartons },
  ];

  const product = dataProduct.slice(0, 3);
  const products = [
    { src: C1, name: "Hot dogs"},
    { src: C2, name: "Breaded chicken products"},
    { src: C3, name: "Hot dogs" },
    { src: C4, name: "Sausages" },
    { src: C5, name: "Breaded chicken products"},
    { src: C6, name: "Chicken nuggets"},
    { src: C7, name: "Breaded chicken products"},
  ];

  const { t } = useLanguage();

  return (
    <div className="bodyApp">
      <div className="bodyContainer">
        <motion.div
          className="prodDescription"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="ourProducts">{t("polskamp_meat")}</span>
        </motion.div>
        <div style={{marginTop:"10%"}}>
          <ProductInfoSkelet product={product} />
          <br />
          <br />
        </div>
        <div>
          <h1 className="bodyTitle">{t("our_prod")}</h1>
        </div>

        <motion.div
          className="gridBodyContainer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 14 }}
            style={{display:"flex",justifyContent:"center"}}
          >
            <SkeletCart
              id={1}
              img={Product1}
              title={t("chicken_msm")}
              desc={t("mech_sep")}
            />
          </motion.div>

          <div className="gridBodyContainerTwo">
            {[Product2, Product3, Product4, Product5].map((product, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.2 + i * 0.1 }}
              >
                <SkeletCart
                  id={i + 2}
                  img={product}
                  title={t(["chicken", "Mortadella", "sausages", "delicies"][i])}
                  desc={t(["minced_chicken", "mortadella_desc", "sausages_desc", "delicies_desc"][i])}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="packing-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="packing-title">{t("packing_methods")}</h2>
          <div className="packing-grid">
            {methods.map((method, index) => (
              <motion.div
                key={index}
                className="packing-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <img src={method.image} alt={method.name} className="packing-image" />
                <div className="packing-name">{method.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ marginTop: "30px", marginBottom: "40px" }}
          className="prodDescription"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="bodyTitle">{t("applications")}<br /></h1>
          <span className="ourProducts">{t("applications_desc")}</span>
        </motion.div>

        <motion.div
          className="carousel-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Carousel products={products} />
        </motion.div>

        <motion.div
          style={{ marginTop: "80px" }}
          className="prodDescription"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="bodyTitle">{t("prod_process")}<br /></h1>
          <span className="ourProducts">{t("prod_process_desc")}</span>
        </motion.div>

        <Film videoSrc={mp4} />

        <motion.div
          className="contact-us"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="contact-us-label">{t("contact_us")}</p>
          <span>{t("contact_desc")}</span>
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>&nbsp;&nbsp;+48 22 780 25 00</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>&nbsp;&nbsp;polskamp@polskamp.pl</span>
          </div>
        </motion.div>

        <motion.div
          className="map-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Map />
        </motion.div>
      </div>
    </div>
  );
};

export default Body;
