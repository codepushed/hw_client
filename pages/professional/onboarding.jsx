import React from "react";

import Header from "../../components/Header";

const Onboarding = () => {
  return (
    <div className="professionalLoginContainer">
      <Header />
      <div className="professionalLogin">
        <h1>Sign Up</h1>
        <p>to become a Service Professional</p>
        <div className="professionalVerificationHead">
          <div className="professionalVerificationContainer">
            <div className="professionalVerificationImg">
              <img src="/assets/adhaar.png" alt="adhaar" />
            </div>
            <span className="professionalVerificationInput">
              <p>Enter adhaar number</p>
              <input type="text" />
            </span>
            <button className="basicRoundedButton pingUsBtn joinBtn">
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
