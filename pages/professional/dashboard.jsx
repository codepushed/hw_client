import React from "react";

import ToggleWidget from "../../components/ToggleWidget";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Header />

      <ToggleWidget />
    </div>
  );
};

export default Dashboard;
