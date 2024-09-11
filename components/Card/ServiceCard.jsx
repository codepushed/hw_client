import React, { useState } from "react";

import Modal from "../Modal";

const ServiceCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="serviceCardContainer">
      <div className="serviceCardImg">
        <img src={data.img} alt="service" />
        <div className="serviceCardHeadContent">
          <h1>{data.name}</h1>
          <p className="serviceCardPara">{data.desc}</p>
          <button className="outlineBtn" onClick={() => handleOpen()}>
            Add
          </button>
        </div>
        {/* <span className="serviceCardDetails">View details</span> */}
      </div>
      <Modal isOpen={open} handleClose={handleClose} />

      <div className="serviceCardContent">
        <span className="serviceCardPricing">
          <p>Coming Soon</p>
          {/* <img src="/assets/icons/dot.png" alt="dot" className="dotIcon" /> */}

          <span className="serviceCardPricingRuppee">
            {/* <img src="/assets/icons/ruppee.png" alt="ruppee" className="ruppeeIcon" />
            <p>499</p> */}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
