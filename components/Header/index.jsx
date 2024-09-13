import React from "react";
import Logo from "../Logo";

import { useRouter } from "next/router";

const Header = ({ isHidden }) => {
  const router = useRouter();
  return (
    <div className="headerContainer">
      <Logo onClick={() => router.push("/coming-soon")} />
      {!isHidden && (
        <>
          <ul className="headerlistContainer">
            <li onClick={() => router.push("/blogs")}>Blogs</li>
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
