import React, { useState } from "react";

import Modal from "../Modal";
import Image from "next/image";

const ServiceCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="serviceCardContainer" onClick={() => handleOpen()}>
        <div className="serviceCardImg">
          <Image src={data.img} alt="service" height={500} width={500} />
          <div className="serviceCardHeadContent">
            <h1>{data.name}</h1>
            <p className="serviceCardPara">{data.desc}</p>
            <button className="outlineBtn">Add</button>
          </div>
          {/* <span className="serviceCardDetails">View details</span> */}
        </div>

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
      <Modal isOpen={open} handleClosed={handleClose} />
    </>
  );
};

export default ServiceCard;
