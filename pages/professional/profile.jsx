import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";

const Profile = () => {
  const [data, setData] = useState();
  const router = useRouter();

  const getUsername = () => {
    const userData = Cookies.get("userData");
    if (userData) {
      const parseData = JSON.parse(userData);
      const user = parseData?.user;
      setData(user);
    }
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className="professionalLoginContainer">
      <Header isMobileHeader={isMobile} />
      <div className="professionalLogin">
        <h1>Hey, {data?.name}</h1>
        <p>Manage your profile here</p>

        <div className="viewCompletedJobsBtn">
          <button
            className="basicRoundedButton viewCompletedBtn"
            onClick={() => router.push("/professional/dashboard")}
          >
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
            {data?.isAdhaarVerified && (
              <img
                src="/assets/verified.png"
                alt="verify"
                className="verifyProfessional"
              />
            )}
          </div>
        </div>

        <div className="professionalProfileDetailsContainer">
          <div className="professionalProfileDetails">
            <span className="professionalLoginInputSection profProInput">
              <p>Name</p>
              <input type="text" value={data?.name} disabled />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "20px" }}
            >
              <p>Address</p>
              <input
                type="text"
                className="addressBigInput"
                value={data?.address}
                disabled
              />
            </span>
          </div>
          <div>
            <span className="professionalLoginInputSection profProInput">
              <p>Adhaar number</p>
              <input type="text" value={data?.adhaarNumber} disabled />
            </span>
            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "20px" }}
            >
              <p>Phone no</p>
              <input type="text" value={data?.phone} disabled />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
