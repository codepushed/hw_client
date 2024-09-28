import React, { useEffect, useState } from "react";
import { clarity } from "react-microsoft-clarity";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";

import Loader from "../components/Loader";
import productConfigs from "../config";

import "../styles/global.css";
import "../styles/scss/style.scss";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    clarity.init(productConfigs.CLARITY);
    ReactGA.initialize(productConfigs.GA);

    if (router.pathname == "/") {
      setLoading(true);
      router.push("/coming-soon");
      setLoading(false);
    }
    if (
      router.pathname !== "/blogs" &&
      router.pathname !== "/blogs/[id]" &&
      router.pathname !== "/services" &&
      router.pathname !== "/contact" &&
      router.pathname !== "/services/[subservice]/[id]"
    ) {
      router.push("/coming-soon");
    } else {
      setLoading(false);
    }
  }, [router.pathname]);

  return (
    <>
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
