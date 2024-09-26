import React from "react";

const Bookings = () => {
  return (
    <div className="bookingsContainer">
      <div className="bookings">
        <div className="bookingsContent">
          <div className="bookingImgContainer">
            <img
              src="/assets/Modern Kitchen Interior Design.jpg"
              alt="bookings"
            />
          </div>

          <div className="bookingsHeadingContainer">
            <div>
              <h1 className="bookingsHeading">Kitchen Cleaning</h1>
              <p className="bookingsSubHeading">Chimney cleaning</p>
            </div>

            <span className="serviceCardPricing bookingsSubHeading">
              <p>7 Aug 2024</p>
              <img src="/assets/icons/dot.png" alt="dot" className="dotIcon" />

              <span className="serviceCardPricingRuppee bookingsSubHeading">
                <p>11:00 AM</p>
              </span>
            </span>
          </div>
        </div>

        <button className="viewDetailsBtn">View details</button>
      </div>
    </div>
  );
};

export default Bookings;
