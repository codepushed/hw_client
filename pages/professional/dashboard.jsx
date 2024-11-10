import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import ToggleWidget from "../../components/ToggleWidget";
import Header from "../../components/Header";
import ServiceDetailsModel from "../../components/Modal/ServiceDetailsModel";
import OTP from "../../components/Modal/OTP";
import { isLoggedTypeProfessional } from "../../helpers/basic";

const Dashboard = () => {
  // const [isloggedIn, setIsLoggedIn] = useState(false);

  // const isProfessionalLoggedIn = async () => {
  //   const isProLoggedIn = await isLoggedTypeProfessional();
  //   if (isProLoggedIn) {
  //     setIsLoggedIn(true);
  //   }
  // };

  // useEffect(() => {
  //   isProfessionalLoggedIn();
  // }, []);

  return (
    <div className="dashboardContainer">
      <Header isMobileHeader={isMobile} />
      <ToggleWidget />
      <ServiceDetailsModel />
      <OTP />
    </div>
  );
};

export default Dashboard;
