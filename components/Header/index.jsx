import React from "react";
import Logo from "../Logo";

const Header = ({ isHidden }) => {
  return (
    <div className="headerContainer">
      <Logo />
      {!isHidden && (
        <>
          <ul className="headerlistContainer">
            <li>Blogs</li>
            {/* <li>Services</li>
            <li>Pricing</li>
            <li>How it works</li> */}
          </ul>
          {/* <div className="headerButtonContainer">
            <button className="basicRoundedButton">Sign In</button>
            <button className="basicRoundedButton-2">Book a service</button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Header;
