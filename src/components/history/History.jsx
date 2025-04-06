import React from "react";
import { Historys, SlideFon } from "../../img/index";
import "./History.css";

const History = () => {
  return (
    <div className="historyApp">
      <div className="historyContainer">
        <img className="sliderImg" src={SlideFon} alt="slider" />
        <div className="wrapperTitleFormOrder">
          <h1 className="titleWarpperForm">History</h1>
          <div className="lineWrapperFormOrder" />
        </div>
        <div className="textAreaHistory">
          <p className="pStyleHistory">
            The company was established in 2004 and is a part of LGI group. In
            2007 Polskamp launched the brand new poultry processing factory and
            since then has specialized in production of mechanically deboned
            poultry meat ( MDM) as well as such products as hamburgers ,
            frankfurters, nuggets chicken fillets etc.
          </p>
          <div className="containerImage">
            <img className="historyimg" src={Historys} alt="history" />
          </div>
          <p className="pStyleHistory">
            Polskamp produces 30 000 tons of MDM annually. As Polish leading
            producer of mechanically deboned meat Polskamp boasts an impressive
            portfolio of regular customers based home and overseas. The key to
            this development has been the unwavering focus upon quality of the
            product as well as customer service. Ongoing and substantial
            investment in the fabric of the operation demonstrates our ambition
            to further develop the business via new markets and associated
            products.
          </p>
          <p className="pStyleHistory">
            At Polskamp we understand the importance of both quality and price
            in today’s competitive world. Price is important but not when it
            comes at the expense of quality. Quality is important but only at a
            price our customers can afford. We think we strike the correct
            balance and continually strive to “raise the bar” in terms of both
            quality and efficiency in all we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;