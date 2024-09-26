import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import Steppers from "../Steppers";

const Drawers = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(true);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer()}>bottom</Button>
        <Drawer
          anchor="bottom"
          open={true}
          onClose={() => setIsDrawerOpen(false)}
          sx={{ width: "80%" }}
        >
          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
            <div className="drawerCloseBtn">x</div>
          </div>

          <div className="drawerContainer">
            <h1>Chimney and stove cleaning</h1>
            <div className="serviceCardContent">
              <span className="serviceCardPricing">
                <p>45 mins</p>
                <img
                  src="/assets/icons/dot.png"
                  alt="dot"
                  className="dotIcon"
                />

                <span className="serviceCardPricingRuppee">
                  <img
                    src="/assets/icons/ruppee.png"
                    alt="ruppee"
                    className="ruppeeIcon"
                  />
                  <p>499</p>
                </span>
              </span>
            </div>

           
          </div>

          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
              <button className="outlineBtn">Add</button>
            </div>
          <Divider />
          <div className="drawerContainer">
            <h2>The way we clean</h2>

            <Steppers />

            <div className="drawerUserExperienceContainer">
              <h1>User Experience</h1>

              <div className="drawerUserExperienceHeader">
                <span>
                  <img src="/assets/icons/Star_black.png" alt="rating" />
                  <h2>4.9</h2>
                </span>

                <p>2.7k reviews</p>
              </div>

              <div className="drawerUserExperienceContent">
                <span className="drawerUserExperienceHead">
                  <div>
                    <p className="drawerUserExperienceSub">Shubham Mehra</p>
                    <p className="drawerUserExperienceDate">August 12, 2024</p>
                  </div>

                  <div className="drawerUserExperienceRating">
                    <p>4.8</p>
                    <img src="/assets/icons/star_white.png" alt="starrating" />
                  </div>
                </span>
                <p
                  className="drawerUserExperienceSubHead"
                  style={{ marginTop: "10px" }}
                >
                  The person who attended was very professional, prompt, polite,
                  thorough, clean and knew the product very well. Excellent
                  experience. Strongly recommend.
                </p>
              </div>

              <div className="drawerUserExperienceContent">
                <span className="drawerUserExperienceHead">
                  <div>
                    <p className="drawerUserExperienceSub">Shubham Mehra</p>
                    <p className="drawerUserExperienceSubHead">
                      August 12, 2024
                    </p>
                  </div>

                  <div className="drawerUserExperienceRating">
                    <p>4.8</p>
                    <img src="/assets/icons/star_white.png" alt="starrating" />
                  </div>
                </span>
                <p
                  className="drawerUserExperienceSubHead"
                  style={{ marginTop: "10px" }}
                >
                  The person who attended was very professional, prompt, polite,
                  thorough, clean and knew the product very well. Excellent
                  experience. Strongly recommend.
                </p>
              </div>

              <div className="drawerUserExperienceContent">
                <span className="drawerUserExperienceHead">
                  <div>
                    <p className="drawerUserExperienceSub">Shubham Mehra</p>
                    <p className="drawerUserExperienceSubHead">
                      August 12, 2024
                    </p>
                  </div>

                  <div className="drawerUserExperienceRating">
                    <p>4.8</p>
                    <img src="/assets/icons/star_white.png" alt="starrating" />
                  </div>
                </span>
                <p
                  className="drawerUserExperienceSubHead"
                  style={{ marginTop: "10px" }}
                >
                  The person who attended was very professional, prompt, polite,
                  thorough, clean and knew the product very well. Excellent
                  experience. Strongly recommend.
                </p>
              </div>

              <div className="drawerUserExperienceContent">
                <span className="drawerUserExperienceHead">
                  <div>
                    <p className="drawerUserExperienceSub">Shubham Mehra</p>
                    <p className="drawerUserExperienceSubHead">
                      August 12, 2024
                    </p>
                  </div>

                  <div className="drawerUserExperienceRating">
                    <p>4.8</p>
                    <img src="/assets/icons/star_white.png" alt="starrating" />
                  </div>
                </span>
                <p
                  className="drawerUserExperienceSubHead"
                  style={{ marginTop: "10px" }}
                >
                  The person who attended was very professional, prompt, polite,
                  thorough, clean and knew the product very well. Excellent
                  experience. Strongly recommend.
                </p>
              </div>

              <div className="drawerUserExperienceContent">
                <span className="drawerUserExperienceHead">
                  <div>
                    <p className="drawerUserExperienceSub">Shubham Mehra</p>
                    <p className="drawerUserExperienceSubHead">
                      August 12, 2024
                    </p>
                  </div>

                  <div className="drawerUserExperienceRating">
                    <p>4.8</p>
                    <img src="/assets/icons/star_white.png" alt="starrating" />
                  </div>
                </span>
                <p
                  className="drawerUserExperienceSubHead"
                  style={{ marginTop: "10px" }}
                >
                  The person who attended was very professional, prompt, polite,
                  thorough, clean and knew the product very well. Excellent
                  experience. Strongly recommend.
                </p>
              </div>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Drawers;
