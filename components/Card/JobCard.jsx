import React from "react";

const JobCard = ({ staticJobCard }) => {
  return (
    <div className="jobCardContainer">
      <span>
        <h1>{staticJobCard.name}</h1>
        <p>{staticJobCard.distance}</p>
      </span>

      <p>{staticJobCard.desc}</p>

      <div>
        <button>Accept</button>
        <button>Decline</button>
      </div>
    </div>
  );
};

export default JobCard;
