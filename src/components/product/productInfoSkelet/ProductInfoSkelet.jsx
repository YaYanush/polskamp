import React from "react";
import {
  OptionIcon1,
  OptionIcon2,
  OptionIcon3,
  OptionIcon4,
} from "../../../img";
import "./ProductInfoSkelet.css";

const ProductInfoSkelet = ({ product }) => {
  return (
    <>
      {product.map((product) => (
        <div className="productInfoSkeletApp">
          <div className="productInfoSkeletContainer">
            <div className="productInfoSkeletLeft">
              <img
                className="productInfoSkeletLeftImg"
                src={product.imgCategory}
                alt="product"
              />
            </div>
            <div className="productInfoSkeletRight">
              <h1 className="productInfoSkeletTitle">{product.nameCategory}</h1>
              <div className="lineProductInfo" />
              <div className="productInfoSkeletBlockInfo">
                <div className="backgrIcon">
                  <img
                    className="iconinfoproduct"
                    src={OptionIcon1}
                    alt="icon"
                  />
                </div>
                <p className="nameIcon">Tłuszcz: </p>
                <p className="parametrs">17% ± 2%</p>
              </div>
              <div className="productInfoSkeletBlockInfo">
                <div className="backgrIcon">
                  <img
                    className="iconinfoproduct"
                    src={OptionIcon2}
                    alt="icon"
                  />
                </div>
                <p className="nameIcon">Białko: </p>
                <p className="parametrs">15% ± 2%</p>
              </div>
              <div className="productInfoSkeletBlockInfo">
                <div className="backgrIcon">
                  <img
                    className="iconinfoproduct"
                    src={OptionIcon3}
                    alt="icon"
                  />
                </div>
                <p className="nameIcon">Wilgotność: </p>
                <p className="parametrs">67% ± 2%</p>
              </div>
              <div className="productInfoSkeletBlockInfo">
                <div className="backgrIcon">
                  <img
                    className="iconinfoproduct"
                    src={OptionIcon4}
                    alt="icon"
                  />
                </div>
                <p className="nameIcon">Packing method: </p>
                <p className="parametrs">polyblocks/carton</p>
              </div>
              <div className="productInfoSkeletRightImgs">
                <div className="productInfoSkeletRightImgsBorder">
                  <img
                    className="productIngoBorder"
                    src={product.pacing1}
                    alt="ProductIngoBorder"
                  />
                </div>
                <div className="lineproductInfoBorder" />
                <div className="productInfoSkeletRightImgsBorder">
                  <img
                    className="productIngoBorder"
                    src={product.pacing2}
                    alt="ProductIngoBorder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}{" "}
    </>
  );
};

export default ProductInfoSkelet;
