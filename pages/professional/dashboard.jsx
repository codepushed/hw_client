import React from "react";

import ToggleWidget from "../../components/ToggleWidget";
import Header from "../../components/Header";
import ServiceDetailsModel from "../../components/Modal/ServiceDetailsModel";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Header />

      <ToggleWidget />

      <ServiceDetailsModel />
    </div>
  );
};

export default Dashboard;
