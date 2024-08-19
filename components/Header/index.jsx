import React from "react";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="headerContainer">
      <Logo />
      <ul className="headerlistContainer">
        <li>Home</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>How it works</li>
      </ul>
      <div className="headerButtonContainer">
        <button className="basicRoundedButton">Sign In</button>
        <button className="basicRoundedButton-2">Book a service</button>
      </div>
    </div>
  );
};

export default Header;
