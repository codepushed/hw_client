import React from "react";

import ToggleWidget from "../../components/ToggleWidget";
import Header from "../../components/Header";
import ServiceDetailsModel from "../../components/Modal/ServiceDetailsModel";
import OTP from "../../components/Modal/OTP";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Header />

      <ToggleWidget />

      <ServiceDetailsModel />
      <OTP />
    </div>
  );
};

export default Dashboard;
