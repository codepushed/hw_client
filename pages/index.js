import React from "react";

import { LandingSeo } from "../components/Seo";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Notification from "../components/Notification";
import WhyChooseUsSection from "../components/Section/WhyChooseUsSection";

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
      </div>
      <SearchBox />

      <div className="landingOfferContainer">
        <div className="landingOfferHeader">
          <h1>From Repairs to Cleaning We've Got You</h1>
          <p>Top rated services at your fingertips</p>
        </div>

        <div className="landingOfferNotificationContainer">
          <div className="landingOfferNotification">
            <Notification
              title="30% Off on Cleaning Services! 🚀"
              desc="Get your home sparkling clean with our limited-time discount. Book now and save big!"
            />
          </div>

          <div className="landingOfferNotification-2">
            <Notification
              title="30% Off on Cleaning Services! 🚀"
              desc="Get your home sparkling clean with our limited-time discount. Book now and save big!"
            />
          </div>

          <div className="landingOfferNotification-3">
            <Notification
              title="30% Off on Cleaning Services! 🚀"
              desc="Get your home sparkling clean with our limited-time discount. Book now and save big!"
            />
          </div>

          <div className="landingOfferNotification-4">
            <Notification
              title="30% Off on Cleaning Services! 🚀"
              desc="Get your home sparkling clean with our limited-time discount. Book now and save big!"
            />
          </div>
        </div>

        <div className="landingOfferLeft">
          <img src="/assets/visuals/leftLine.png" alt="left" />
        </div>

        <div className="landingOfferCenterContainer">
          <div className="landingOfferCenter">
            <img src="/assets/person.png" alt="person" />
          </div>
        </div>

        <div className="landingOfferRight">
          <img src="/assets/visuals/rightLine.png" alt="left" />
        </div>
      </div>

      <WhyChooseUsSection />
    </div>
  );
};

export default Home;
