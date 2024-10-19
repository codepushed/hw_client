import React, { useEffect, useState } from "react";
import Logo from "../Logo";

import { useRouter } from "next/router";
import { isLoggedIn } from "../../helpers/basic";

const Header = ({ isHidden }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (isUserLoggedIn) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div className="headerContainer">
      <Logo onClick={() => router.push("/")} />
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
            <li>Services</li>
            <li>Pricing</li>
            <li>How it works</li>
          </ul>
          <div className="headerButtonContainer">
            {!loggedIn && (
              <button
                className="basicRoundedButton"
                onClick={() => router.push("/login")}
              >
                Sign In
              </button>
            )}

            {router.asPath.includes("/coming-soon") && (
              <button
                className="basicRoundedButton pingUsBtn"
                onClick={() => router.push("/contact")}
              >
                Ping us
              </button>
            )}
            <button className="basicRoundedButton-2">Book a service</button>
            {loggedIn && (
              <div className="headerProfileContainer">
                <img src="/assets/profilePicture.jpg" alt="profile" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
