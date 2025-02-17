import React from "react";
import SkeletCart from "./skeletCart/SkeletCart";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Polyblocks,
  Cartons
} from "../../../img/index";
import "./Body.css";

const Body = () => {

  const methods = [
    { name: "Polyblocks", image: Polyblocks },
    { name: "Cartons", image: Cartons },
  ];
  
  return (
    <div className="bodyApp">
      <div className="bodyContainer">
        <div className="prodDescription">
          <h1 className="bodyTitle">Our products:<br></br></h1>
          <div className="lineProductInfo1"></div>
          <span className="ourProducts">Polskamp Meat Industrie specialises in the separation of chicken meat from bone and of chicken meat and fat. On our modern production lines, various parts of the chicken are processed into high-quality semi-finished products for further processing</span>
          
        </div>
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
        <div className="packing-container">
      <h2 className="packing-title">Packing Methods We Offer</h2>
          <div className="packing-grid">
            {methods.map((method, index) => (
              <div key={index} className="packing-card">
                <img src={method.image} alt={method.name} className="packing-image" />
                <div className="packing-name">{method.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
