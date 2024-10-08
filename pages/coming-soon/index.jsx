import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Image from "next/image";
import { isMobileSafari } from "react-device-detect";
import { LandingSeo } from '../../Seo'

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
      <LandingSeo />
      <Header />
      <div className="comingSoonWrapper">
        <div className="comingSoonContentText">
          <h1>Your trusted home services</h1>
          <h1 className="comingSoonContentSubText">
            Delivered to your doorstep
          </h1>

          <p>Plumbing, Electrical Work, Cleaning, and More—Coming Soon!</p>
          {isMobile && isMobileSafari && (
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
            <Image
              src="/assets/Stylized 3D Construction Worker Background Removed.png"
              alt="professionals"
              height={1000}
              width={1000}
            />
          ) : (
            <Image
              src="/assets/groupofpro.png"
              alt="professionals"
              height={1000}
              width={1000}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
