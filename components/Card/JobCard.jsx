import React from "react";

const JobCard = ({ staticJobCard }) => {
  return (
    <div className="jobCardContainer">
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
  );
};

export default JobCard;
