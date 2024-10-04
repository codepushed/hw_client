import React from "react";

import Header from "../../components/Header";
import JobCard from "../../components/Card/JobCard";
import Footer from "../../components/Footer";

import { staticJobCard } from "../../Static";

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

      <div className="professionalSectionWrapper">
        <div className="professionalSection">
          <h1>Why work with us?</h1>

          <div className="professionalSectionCardContainer">
            <div className="professionalSectionCard">
              <h2>Flexibility</h2>
              <p>Work when you want, where you want.</p>
            </div>

            <div className="professionalSectionFairPay">
              <div className="professionalSectionCard">
                <h2>Fair pay</h2>
                <p>
                  Transparent pricing with guaranteed payments after job
                  completion.
                </p>
              </div>
            </div>

            <div className="professionalSectionCard">
              <h2>Support System</h2>
              <p>24/7 assistance to make your work easier</p>
            </div>
          </div>
        </div>
      </div>

      <div className="professionalVerificationHead">
        <h1>How to get started</h1>
        <p>Easy onboarding -</p>
        <p>Aadhaar Verification is All You Need</p>

        <div className="professionalVerificationContainer">
          <div className="professionalVerificationImg">
            <img src="/assets/adhaar.png" alt="adhaar" />
          </div>

          <span className="professionalVerificationInput">
            <p>Enter adhaar number</p>
            <input type="text" disabled />
          </span>

          <button className="basicRoundedButton pingUsBtn joinBtn">
            Get OTP
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Professional;
