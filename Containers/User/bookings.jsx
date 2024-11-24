import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Loader from "../../components/Loader";

import { isLoggedIn } from "../../helpers/basic";

const Bookings = () => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      router.push("/login");
    } else {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div className="bookingsContainer">
      {isLogged ? (
        <div className="bookings">
          <div className="bookingsContent">
            {/* <div className="bookingImgContainer">
              <img
                src="/assets/Modern Kitchen Interior Design.jpg"
                alt="bookings"
              />
            </div> */}

            <div className="bookingsHeadingContainer">
              <div>
                <h1 className="bookingsHeading">Your bookings</h1>
                <p className="bookingsSubHeading">will appear here soon</p>
              </div>

              {/* <span className="serviceCardPricing bookingsSubHeading">
                <p>7 Aug 2024</p>
                <img
                  src="/assets/icons/dot.png"
                  alt="dot"
                  className="dotIcon"
                />

                <span className="serviceCardPricingRuppee bookingsSubHeading">
                  <p>11:00 AM</p>
                </span>
              </span> */}
            </div>
          </div>

          {/* <button className="viewDetailsBtn">View details</button> */}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Bookings;
