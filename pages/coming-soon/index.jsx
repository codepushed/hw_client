import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Header";

const ComingSoon = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="comingSoonWrapper">
        <div className="comingSoonContentText">
          <h1>Your trusted home services</h1>
          <h1 className="comingSoonContentSubText">
            Delivered to your doorstep
          </h1>

          <p>Plumbing, Electrical Work, Cleaning, and More—Coming Soon!</p>
          {isMobile && (
            <button
              className="basicRoundedButton pingUsBtn"
              onClick={() => router.push("/contact")}
            >
              Ping us
            </button>
          )}
        </div>

        <div className="comingSoonImg">
          {isMobile && isMobile ? (
            <img
              src="/assets/Stylized 3D Construction Worker Background Removed.png"
              alt="professionals"
            />
          ) : (
            <img src="/assets/groupofpro.png" alt="professionals" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
