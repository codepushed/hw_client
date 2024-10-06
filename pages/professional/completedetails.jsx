import React from "react";

import Header from "../../components/Header";

const CompleteDetails = () => {
  return (
    <div className="professionalLoginContainer">
      <Header />
      <div className="professionalLogin">
        <h1>Final step</h1>
        <p>you are one step closer</p>
        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection">
            <h3>Select profession</h3>
           <select className="professionSelector">
            <option>Electrician</option>
            <option>Salon expert</option>
            <option>Plumber</option>
            <option>Cleaning expert</option>
           </select>
            <button className="basicRoundedButton profOtpbtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteDetails;
