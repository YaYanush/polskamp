import React from "react";
import SkeletCart from "./skeletCart/SkeletCart";
import Carousel from '../../carousel/Carousel'
import Map from '../../map/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Polyblocks,
  Cartons,
  TitlePhoto,
  Quality,
  Halal,
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7,
  Factory

} from "../../../img/index";
import "./Body.css";

const Body = () => {

  const methods = [
    { name: "Polyblocks", image: Polyblocks },
    { name: "Cartons", image: Cartons },
  ];

  const products = [
  { src: C1, name: "Hot dogs" },
  { src: C2, name: "Breaded chicken products" },
  { src: C3, name: "Hot dogs" },
  { src: C4, name: "Sausages" },
  { src: C5, name: "Breaded chicken products" },
  { src: C6, name: "Chicken nuggets" },
  { src: C7, name: "Breaded chicken products" },
];
  
  return (
    <div className="bodyApp">
      <div className="labeles_container">
          <div className="icon_wrapper">
            <img src={Quality} alt="Photo 1" className="labeles" />
            <img src={Halal} alt="Photo 2" className="labeles" />
          </div>
        </div> 
      
      <div className="bodyContainer">
        <div className="prodDescription">
          <h1 className="bodyTitle">Our products:<br></br></h1>
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
              title="CHICKEN"
              desc="Polskamp Meat Industrie also produces minced chicken meat."
            />
            <SkeletCart
              id={3}
              img={Product3}
              title="MORTADELLA"
              desc="Delicious, high-quality traditional Mortadella in 4 variations."
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
              title="Poultry Delicacies"
              desc="A selection of premium chicken-based specialties, including savory luncheon meat, tender breast ham, flavorful sandwich spreads, and classic picadillo."
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
        <div  style={{marginTop:"30px", marginBottom:"40px"}} className="prodDescription">
          <h1 className="bodyTitle">Application of our products<br></br></h1>
          <span className="ourProducts">Polskamp Meat Industrie creates products that are intended for further processing. Our products are used all over the world as a high-quality ingredient for the production of a wide range of well-known and less well-known products, including canned goods, sausage products, burgers and nuggets.</span>
        </div>
        <div className="carousel-container">
          <Carousel products={products}>

          </Carousel>
        </div>
        <div  style={{marginTop:"80px"}} className="prodDescription">
          <h1 className="bodyTitle">Our production process<br></br></h1>
          <span className="ourProducts">Polskamp uses the latest technologies and our production process is almost fully automated. By combining our years of experience with innovative technologies, we have optimised our production processes and ingredient compositions. Polskamp can therefore offer standardised products of a high and consistent quality.</span>
        </div>
        <div className="photo_container">
          <img src={Factory} alt={"title_photo"} className="title_photo" />
        </div>
        <div className="contact-us">
          <p className="contact-us-label">Contacts us</p>
          <span>Contact Polskamp today for your wholesale processed poultry needs.</span> 
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone}  className="icon" />
            <span>&nbsp;&nbsp;+48 22 780 25 00</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>&nbsp;&nbsp;polskamp@polskamp.pl</span>
          </div>
        </div>
        <div className="map-wrapper">
            <Map />
        </div>
        

        
      </div>
    </div>
  );
};

export default Body;
