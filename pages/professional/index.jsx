import React from "react";

import { staticJobCard } from "../../Static";
import Header from "../../components/Header";
import JobCard from "../../components/Card/JobCard";

const Professional = () => {
  return (
    <div>
      <Header />
      <div className="professionalHeaderContainer">
        <div className="professionalHeaderWrapper">
          <div>
            <h1>Become a certified</h1>
            <h1 className="professionalHeader">professional today!</h1>

            <span className="professionalSubHeader">
              <p>Flexible jobs, fair pay, and constant</p>
              <p>demand - start working on your terms</p>
            </span>

            <button className="basicRoundedButton pingUsBtn joinBtn">
              Join us
            </button>
          </div>

          <div className="professionalHeaderImg">
            <img src="/assets/constructionbros.png" alt="professional" />
          </div>

          <div className="jobCardWrapper">
            <JobCard staticJobCard={staticJobCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
