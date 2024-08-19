import React from "react";

import { LandingSeo } from "../components/Seo";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

const Home = () => {
  return (
    <div className="landingContainer">
      <LandingSeo />
      <Header />
      <div className="landingContainerHeaderContent">
        <div className="landingContainerImg">
          <img
            src="/assets/icons/bucketIcon.png"
            alt="bucket"
            className="bucketIcon"
          />
        </div>
        <div className="landingContainerHeading">
          <h1>Uncover the hype</h1>
          <h1>home services on fleek</h1>

          <div className="landingContainerSubHeading">
            <p>
              Book Trusted Home Services at Your DoorstepFrom plumbing to salon
              services,
            </p>
            <p>we've got you covered!</p>
          </div>
        </div>

        {/* <img src="/assets/icons/brushIcon.png" alt="bucket" /> */}
      </div>
      <SearchBox />
    </div>
  );
};

export default Home;
