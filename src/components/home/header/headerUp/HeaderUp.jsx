import { useLanguage } from "../../../../LanguageContext";
import { Halal, Quality } from "../../../../img/index";
import { motion } from "framer-motion";
import "./HeaderUp.css";

const HeaderUp = () => {
  const { t } = useLanguage();

  return (
    <div className="main">
      <motion.div
        className="head"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 14,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          Polskamp<sup style={{ fontSize: "22px" }}>©</sup>
        </motion.h1>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 14,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          Poultry production
        </motion.h1>
        <div className="circle1"></div>
      </motion.div>

      <div className="flexbox">
        <div className="left">
          <motion.div
            className="b1 box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <h1>30+</h1>
            <p>COUNTRIES</p>
          </motion.div>

          <motion.div
            className="b2 box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <h1>MODERN</h1>
            <p>TECHNOLOGY OF PRODUCTION</p>
          </motion.div>
        </div>

        <motion.div
          className="mid"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 14,
            delay: 0.6,
          }}
          viewport={{ once: true }}
        >
          <img
            src="https://cdn0.uncomo.com/es/posts/2/4/9/que_pasa_si_como_pollo_en_mal_estado_52942_orig.jpg"
            alt="face"
          />
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.8,
          }}
          viewport={{ once: true }}
        >
          <p>
            Eksportujemy nasze produkty do kilkudziesięciu krajów Europy, Azji oraz
            bliskiego wschodu. Zapraszamy do zapoznania się z asortymentem!
          </p>
        </motion.div>

        <div className="circle2"></div>
      </div>

      <motion.div
        className="labeles_container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="icon_wrapper">
          <img src={Quality} alt="Photo1" className="labeles" />
          <img src={Halal} alt="Photo2" className="labeles" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderUp;
