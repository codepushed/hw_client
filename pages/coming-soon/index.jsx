import React from "react";

import Header from "../../components/Header";

const ComingSoon = () => {
  return (
    <div>
      <Header />
      <div className="comingSoonWrapper">
        <div className="comingSoonContentText">
        <h1>Your trusted home services</h1>
        <h1 className="comingSoonContentSubText">Delivered to your doorstep</h1>

        <p>Plumbing, Electrical Work, Cleaning, and More—Coming Soon!</p>

        </div>

        <div className="comingSoonImg">
          <img src="/assets/groupofpro.png" alt="professionals" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
