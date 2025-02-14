import React from "react";
import "./SkeletCart.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SkeletCart = ({ id, img, title, desc }) => {
  return (
    <div className={id === 1 ? "skeletAppBase" : "skeletApp"}>
      <div className="skeletContainer" key={id}>
        <img
          className={id === 1 ? "skeletImgBase" : "skeletImg"}
          src={img}
          alt="product"
        />
        <div
          className={
            id === 1 ? "skeletInfoContainerBase" : "skeletInfoContainer"
          }
        >
          <h1 className={id === 1 ? "skeletTitleBase" : "skeletTitle"}>
            {title}
          </h1>
          <p
            className={id === 1 ? "skeletDescriptionBase" : "skeletDescription"}
          >
            {desc}
          </p>
        </div>
        <Link to={`/product/${id}`}>
          <div className="skeletButtonContainer">
            <button className={id === 1 ? "skeletButtonBase" : "skeletButton"}>
              MORE INFO
            </button>
            <IoIosArrowForward className="iconSkelet" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SkeletCart;
