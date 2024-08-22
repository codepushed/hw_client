import React from "react";

const ServiceCard = () => {
  return (
    <div className="serviceCardContainer">
      <div className="serviceCardImg">
        <img src="/assets/Modern Kitchen Interior Design.jpg" alt="service" />
        <div className="serviceCardHeadContent">
        <h1>Chimney</h1>
        <p className="serviceCardPara">
          Stain removal from chimney exterior, mesh & filter using steam
          machine. Motor cleaning & repair not included.
        </p>
      <button className="outlineBtn">Add</button>

        </div>
      {/* <span className="serviceCardDetails">View details</span> */}

       
      </div>

      <div className="serviceCardContent">
        <span className="serviceCardPricing">
          <p>45 mins</p>
          <img src="/assets/icons/dot.png" alt="dot" className="dotIcon" />

          <span className="serviceCardPricingRuppee">
            <img src="/assets/icons/ruppee.png" alt="ruppee" className="ruppeeIcon" />
            <p>499</p>
          </span>
        </span>
      </div>

    </div>
  );
};

export default ServiceCard;
