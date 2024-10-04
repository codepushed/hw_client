import React, { useState } from "react";

import ServiceDetailsModel from "../Modal/ServiceDetailsModel";

const JobCard = ({ staticJobCard }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="jobCardContainer" onClick={() => setOpen(true)}>
        <span className="jobCardName">
          <h1>{staticJobCard.name}</h1>
          <p>{staticJobCard.distance}</p>
        </span>
        <p className="jobCardDesc">{staticJobCard.desc}</p>
        <div className="jobCardButton">
          <button className="jobCardAcceptBtn">Accept</button>
          <button className="jobCardDeclineBtn">Decline</button>
        </div>
      </div>
      <ServiceDetailsModel isOpen={open} handleClose={handleClose} />
    </>
  );
};

export default JobCard;
