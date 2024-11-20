import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import { updateProfessionalDetails } from "../../helpers";

const CompleteDetails = () => {
  const [profession, setProfession] = useState("electrician");
  const router = useRouter();

  const handleChange = (event) => {
    setProfession(event.target.value);
  };

  const updateProfession = async () => {
    const data = {
      profession: profession
    }
    if (profession) {
      const response = await updateProfessionalDetails(data);
      if (response) {
        router.push("/professional/dashboard");
      }
    }
  };

  return (
    <div className="professionalLoginContainer">
      <Header isMobileHeader={isMobile} />
      <div className="professionalLogin">
        <h1>Final step</h1>
        <p>you are one step closer</p>
        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection">
            <h3>Select profession</h3>
            <select
              className="professionSelector"
              value={profession}
              onChange={handleChange}
            >
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="cleaner">Cleaning expert</option>
            </select>
            <button
              className="basicRoundedButton profOtpbtn"
              onClick={() => updateProfession()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteDetails;
