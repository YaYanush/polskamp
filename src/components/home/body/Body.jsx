import React from "react";
import SkeletCart from "./skeletCart/SkeletCart";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
} from "../../../img/index";
import "./Body.css";

const Body = () => {
  return (
    <div className="bodyApp">
      <div className="bodyContainer">
        <h1 className="bodyTitle">OUR PRODUCTS</h1>
        <div className="gridBodyContainer">
          <SkeletCart
            id={1}
            img={Product1}
            title="KURCZAK MDM"
            desc="Mechanically separated chicken meat is available in several varieties. Each variety is a high-quality product with its own characteristics."
          />
          <div className="gridBodyContainerTwo">
            <SkeletCart
              id={2}
              img={Product2}
              title="CHICKEN SKIN"
              desc="Polskamp Meat Industrie also produces minced chicken meat."
            />
            <SkeletCart
              id={3}
              img={Product3}
              title="MORTADELLA"
              desc="Delicious, high-quality traditional Mortadella."
            />
            <SkeletCart
              id={4}
              img={Product4}
              title="CHICKEN SAUSAGES"
              desc="The chicken breast taken from the pectoral muscle on the underside of the chicken."
            />
            <SkeletCart
              id={5}
              img={Product5}
              title="UPPER AND LOWER BACKS"
              desc="A thigh is produced by cutting a whole leg at the joint between the tibia and the femur."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
