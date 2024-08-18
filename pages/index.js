import React from "react";

import { LandingSeo } from "../components/Seo";

const Home = () => {
  return (
    <div className="landingContainer">
      <LandingSeo />

      <div className="comingSoonContainer">
        <h1>One Tap to </h1>
        <div className="comingSoonImgContainer">
        <img src="/hw_big.png" alt="logo" />
        </div>
        <h1>Your Next <span style={{ color: "#98FF98" }}>Service</span></h1>
      </div>
    </div>
  );
};

export default Home;
