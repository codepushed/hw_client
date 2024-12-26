import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import ToggleWidget from "../../components/ToggleWidget";
import Header from "../../components/Header";
import ServiceDetailsModel from "../../components/Modal/ServiceDetailsModel";
import OTP from "../../components/Modal/OTP";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

import { getLoggedInUserDetails, isLoggedIn } from "../../helpers/basic";

const Dashboard = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const router = useRouter();

  const handleClose = () => {
    if (!user?.isAdhaarVerified) {
      setOpen(false);
    }
  };

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      router.push("/professional");
    } else {
      setIsLogged(true);
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

  const getUsername = () => {
    const userData = Cookies.get("userData");
    if (userData) {
      const parseData = JSON.parse(userData);
      const FirstName = parseData?.user?.name;
      setName(FirstName);
    }
  };

  useEffect(() => {
    getLoggedInUser();
    isVerified();
    getUsername();
  }, []);

  return (
    <div className="dashboardContainer">
      <Header isMobileHeader={isMobile} />
      {isLogged ? (
        <>
          <ToggleWidget name={name} />
          <Modal isOpen={open} handleClosed={handleClose} />
          <ServiceDetailsModel />
          <OTP />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Dashboard;
