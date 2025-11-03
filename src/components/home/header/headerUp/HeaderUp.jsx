import { useLanguage } from "../../../../LanguageContext";
import { Halal, Quality } from "../../../../img/index";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./HeaderUp.css";
import {MDM3,En1,En2,En3,En4,En5,En6,En7} from '../../../../img'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Хук, чтобы дождаться клиентского рендера
const useHasMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

const HeaderUp = () => {
  const { t } = useLanguage();
  const mounted = useHasMounted();
  const images = [En1,En2,En3,En4,En5,En6,En7]

  if (!mounted) return null; // Или можно вернуть прелоадер

  return (
    <div className="main">
      <div className="slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView="auto"
        className="my-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide  className="custom-slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <div className="circle1"></div>
      <div className="circle2"></div>
      <motion.div
        className="head"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 14,
            delay: 0.2,
          }}
        >
          Polskamp<sup style={{ fontSize: "22px" }}>©</sup>
        </motion.h1>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 14,
            delay: 0.4,
          }}
        >
          {t("poultry_prod")}
        </motion.h2>
        
      </motion.div>

      <div className="flexbox">
        <div className="left">
          <motion.div
            className="b1 box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            <h1>90+</h1>
            <p>{t("countries")}</p>
          </motion.div>

          <motion.div
            className="b2 box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
          >
            <h1>{t("modern")}</h1>
            <p>{t("technol")}</p>
          </motion.div>
        </div>

        <motion.div
          className="mid"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 14,
            delay: 0.6,
          }}
        >
          <img
            src={MDM3}
            alt="face"
          />
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.8,
          }}
        >
          <p>
            {t("title_desc")}
          </p>
        </motion.div>

        
      </div>

      <motion.div
        className="labeles_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
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
