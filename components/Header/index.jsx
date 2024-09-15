import React, { useEffect } from "react";
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
            {!router.asPath.includes("/coming-soon") ? (
              <li onClick={() => router.push("/blogs")}>Blogs</li>
            ) : (
              <button
              className="basicRoundedButton pingUsBtn"
              onClick={() => router.push("/contact")}
            >
              Ping us
            </button>
            )}
            {/* <li>Services</li>
            <li>Pricing</li>
            <li>How it works</li> */}
          </ul>
          {/* <div className="headerButtonContainer"> */}
            {/* <button className="basicRoundedButton">Sign In</button> */}
            {/* {router.asPath.includes("/coming-soon") && (
              <button
                className="basicRoundedButton pingUsBtn"
                onClick={() => router.push("/contact")}
              >
                Ping us
              </button>
            ) } */}
            {/* <button className="basicRoundedButton-2">Book a service</button> */}
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default Header;
