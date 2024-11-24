import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";
import { getLoggedInUserDetails } from "../../helpers/basic";
import Modal from "../../components/Modal";

const Profile = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    if (!user?.isAdhaarVerified) {
      setOpen(false);
    }
  };

  const getUsername = () => {
    const userData = Cookies.get("userData");
    if (userData) {
      const parseData = JSON.parse(userData);
      const user = parseData?.user;
      setData(user);
    }
  };

  const isVerified = () => {
    const user = getLoggedInUserDetails();
    if (user?.isAdhaarVerified) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    getUsername();
    isVerified();
  }, []);

  return (
    <div className="professionalLoginContainer">
      <Header isMobileHeader={isMobile} />
      <Modal isOpen={open} handleClosed={handleClose} />
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
