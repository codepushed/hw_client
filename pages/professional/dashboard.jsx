import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

import ToggleWidget from "../../components/ToggleWidget";
import Header from "../../components/Header";
import ServiceDetailsModel from "../../components/Modal/ServiceDetailsModel";
import OTP from "../../components/Modal/OTP";
import Loader from "../../components/Loader";

import { isLoggedIn } from "../../helpers/basic";

const Dashboard = () => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      router.push("/professional");
    } else {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div className="dashboardContainer">
      <Header isMobileHeader={isMobile} />
      {isLogged ? (
        <>
          <ToggleWidget />
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
