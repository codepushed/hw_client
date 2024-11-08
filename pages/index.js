import React from "react";
import { useRouter } from "next/router";
import { isMobile, isMobileSafari } from "react-device-detect";

import { LandingSeo } from "../Seo/index";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Notification from "../components/Notification";
import WhyChooseUsSection from "../components/Section/WhyChooseUsSection";
import Services from "../components/Section/Services";
import HowItWorks from "../components/Section/HowItWorks";
import Footer from "../components/Footer";

const Home = () => {
  const router = useRouter();

  return (
    <div className="landingContainer">
      <LandingSeo />
      <Header isMobileHeader={isMobile} />
      <div style={{ width: "100%" }}>
        <div className="landingContainerHeaderContent">
          {!isMobile && !isMobileSafari && (
            <div className="landingContainerImg">
              <img
                src="/assets/icons/bucketIcon.png"
                alt="bucket"
                className="bucketIcon"
              />
            </div>
          )}
          <div className="landingContainerHeading">
            <h1>Uncover the hype</h1>
            <h1>home services on fleek</h1>

            <div className="landingContainerSubHeading">
              <p>
                Book Trusted Home Services at Your DoorstepFrom plumbing to
                salon services,
              </p>
              <p>we've got you covered!</p>
            </div>
          </div>
        </div>
        <SearchBox />
      </div>

      <div className="landingDeviceWrapper">
        <div className="landingDevicesContainer">
          <div className="landingDevicesContent">
            <h1>Effortless Booking Experience </h1>
            <p>at your fingertips</p>

            <div className="bookingExperience">
              <button
                className="buttonWithIcon explorServiceBtn"
                onClick={() => router.push("/signup")}
              >
                Sign up now
              </button>

              <button
                className="buttonWithIcon explorServiceBtn"
                onClick={() => router.push("/services")}
              >
                Explore services
              </button>
            </div>
          </div>

          <div className="landingDeviceImg">
            <img
              src="/assets/homeworkWeb.png"
              alt="laptop"
              className="landingDeviceWeb"
            />
            <img
              src="/assets/homeworkapp.png"
              className="landingDeviceMobile"
              alt="mobile"
            />
          </div>
        </div>
      </div>

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
      <Services />
      <HowItWorks />

      <Footer />
    </div>
  );
};

export default Home;
