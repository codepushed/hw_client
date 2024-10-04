import React from "react";

import Header from "../../components/Header";

const Profile = () => {
  return (
    <div className="professionalLoginContainer">
      <Header />
      <div className="professionalLogin">
        <h1>Hey, Shristi</h1>
        <p>Manage your profile here</p>

        <div className="viewCompletedJobsBtn">
          <button className="basicRoundedButton viewCompletedBtn">
            View completed jobs
          </button>
        </div>

        <div className="professionalProfileContainer">
          <div className="professionalProfileImg">
            <img
              src="/assets/profilePicture.jpg"
              alt="profileimg"
              className="professionalProfileImage"
            />
            <img
              src="/assets/verified.png"
              alt="verify"
              className="verifyProfessional"
            />
          </div>
        </div>

        <div className="professionalProfileDetailsContainer">
          <div className="professionalProfileDetails">
            <span className="professionalLoginInputSection profProInput">
              <p>Name</p>
              <input type="text" />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "20px" }}
            >
              <p>Address</p>
              <input type="text" className="addressBigInput" />
            </span>
          </div>

          <div>
            <span className="professionalLoginInputSection profProInput">
              <p>Adhaar number</p>
              <input type="text" />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "20px" }}
            >
              <p>Phone no</p>
              <input type="text" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
