import React from "react";

const WhyChooseUsSection = () => {
  return (
    <div className="sectionContainer">
      <div className="sectionHeader">
        <span className="sectionHeaderContent">
          <h1>Why we're the real deal</h1>
          <p>Get more than just a service—</p>
          <p>experience excellence</p>
        </span>

        <div className="sectionHeaderImg">
          <img src="/assets/hand.png" alt="hand" />
        </div>
      </div>

      <div className="sectionContentContainer">
        <div className="sectionContent">
          <div className="sectionContentImg">
            <img src="/assets/professional.png" alt="professional" />
          </div>
          <span>
            <p className="sectionContentTyphographyHead">
              Trusted Professionals
            </p>
            <p className="sectionContentTyphographySubHead">
              All our professionals are background-checked, certified, and
              highly rated by customers
            </p>
          </span>
        </div>

        <div className="sectionContent sectionContentRight">
          <div className="sectionContentImg">
            <img src="/assets/booking.png" alt="booking" />
          </div>
          <span>
            <p className="sectionContentTyphographyHead">Convenient Booking</p>
            <p className="sectionContentTyphographySubHead">
              Book a service anytime, anywhere, with just a few taps on your
              mobile device
            </p>
          </span>
        </div>

        <div className="sectionContent">
          <div className="sectionContentImg">
            <img src="/assets/ruppee.png" alt="pricing" />
          </div>
          <span>
            <p className="sectionContentTyphographyHead">Transparent Pricing</p>
            <p className="sectionContentTyphographySubHead">
              <span>No hidden fees.</span> What you see is what you pay.
            </p>
          </span>
        </div>

        <div className="sectionContent sectionContentRight">
          <div className="sectionContentImg">
            <img src="/assets/medal-dynamic-color.png" alt="quality" />
          </div>
          <span>
            <p className="sectionContentTyphographyHead">Quality Assurance</p>
            <p className="sectionContentTyphographySubHead">
              We guarantee your satisfaction, with high standards and attention
              to detail
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
