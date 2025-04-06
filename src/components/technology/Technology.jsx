import React from "react";
import { SlideFon, TechnologyFon } from "../../img";

const Technology = () => {
  return (
    <div className="historyApp">
      <div className="historyContainer">
        <img className="sliderImg" src={SlideFon} alt="slider" />
        <div className="wrapperTitleFormOrder">
          <h1 className="titleWarpperForm">Technology</h1>
          <div className="lineWrapperFormOrder" />
        </div>
        <div className="textAreaHistory">
          <p className="pStyleHistory">
            Polskamp uses the state of the art technological and organisational
            solutions that are available on the market nowadays. At Polskamp we
            have a highly automated and computerized production line which
            eliminates a direct contact between product and human during the
            production process thereby involving minimal labour input.
          </p>
          <div className="containerImage">
            <img className="historyimg" src={TechnologyFon} alt="history" />
          </div>
          <p className="pStyleHistory">
            Currently, none of poultry processing companies in Poland is
            exclusively focused on the production of MDM , and what is more such
            production has incidental and marginal manner. They produce MDM on
            the occasion of their activity concerning the slaughtering ,
            evisceration and further processing of poultry. At Polskamp however,
            the production is maintained in the mass way which utilizes advanced
            processing technology thus enabling to produce the best of quality
            MDM.
          </p>
          <p className="pStyleHistory">
            At Polskamp we observe full HACCP, GHP, GMP procedures and process
            documentation. A highly trained and experienced Quality Assurance
            team test our products at every stage of the process. All our
            products are metal detected during production and both chemical and
            microbilogical testing is carried out in our own on-site modern
            laboratory with the supervision of veterinary official .These checks
            and records provide full material traceability of both raw material
            and our final product to ensure that all legal requirements are met.
          </p>
          <p className="pStyleHistory">
            At its disposal Polskamp has the fleet of trucks refrigerators and
            according to customer preference offers the product for sale on
            delivered basis. Polskamp can also offer worldwide delivery by sea
            container and railway section, as appropriate, in association with a
            range of reputable transport and logistics companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;