import React from "react";

const Services = () => {
  return (
    <div className="landingServicesContainer">
      <h1>Services</h1>
      <p>Services that fulfills your needs, trusted experts for every need</p>
      <p>anytime, anywhere. Convenience and quality just a click away</p>

      <div className="landingServicesBentosContainer">
        <div className="bentosRowContainer">
          <div className="bentosRowOne">
            <div className="landingServicesBentos">
              <div className="landingServiceBentosImg">
                <img src="/assets/taprepair.png" alt="taprepair" />
              </div>
              <div className="landingServicesTags">
                <h1>Tap leakage fix</h1>
              </div>
            </div>

            <div className="landingServicesBentosThree">
              <div className="landingServiceBentosImg">
                <img src="/assets/switchboard.png" alt="taprepair" />
              </div>
              <div className="landingServicesTags">
                <h1>Electrical switch board setup</h1>
              </div>
            </div>
          </div>

          <div className="bentosRowOne">
            <div className="landingServicesBentosTwo">
              <div className="landingServicesTags">
                <h1>Kitchen cleaning</h1>
              </div>
            </div>

            <div className="landingServicesBentosThree">
              <div className="landingServiceBentosImg">
                <img src="/assets/carwash.png" alt="taprepair" />
              </div>
              <div className="landingServicesTags">
                <h1>Car wash</h1>
              </div>
            </div>
          </div>

          <div className="bentosRowOne">
            <div className="landingServicesBentos">
              <div className="landingServiceBentosImg">
                <img src="/assets/haircutsServiceLanding.png" alt="taprepair" />
              </div>
              <div className="landingServicesTags">
                <h1>Hair cuts</h1>
              </div>
            </div>

            <div className="landingServicesBentosFour">
              <div className="landingServicesTags">
                <h1>Appliances repair</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bentosExploremoreBtn">
          <div className="bentosExploreWrapper">
            <button>
              Explore more
              <img src="/assets/upsideArrow.png" alt="explore" />
            </button>
          </div>

          <div className="landingServicesBentosFive">
            <div className="landingServicesTags">
              <h1>Wall painting</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
