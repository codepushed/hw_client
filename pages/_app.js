import React, { useEffect, useState } from "react";
import { clarity } from "react-microsoft-clarity";
import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Loader from "../components/Loader";
import productConfigs from "../config";
import store from "../store/store";
import SwipeableEdgeDrawer from "../components/Drawers/SwipeableEdgeDrawer";

import "../styles/global.css";
import "../styles/scss/style.scss";
import { isLoggedType } from "../helpers/basic";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(false);
  const { asPath } = useRouter();
  const router = useRouter();
  const professionalRestrictions = [
    "/professional/completedetails",
    "/professional/dashboard",
    "/professional/onboarding",
    "/professional/profile",
    "/professional/login",
    "/",
  ];
  const userRestrictions = [
    "/professional/completedetails",
    "/professional/dashboard",
    "/professional/onboarding",
    "/professional/profile",
    "/professional/login",
    "/login",
    "/signup",
    "/admin",
    "/admin/dashboard",
    "/admin/dashboard/bookings",
  ];

  const adminRestrictions = ["/admin/dashboard", "/admin/dashboard/bookings"];

  let persistor = persistStore(store);

  useEffect(() => {
    clarity.init(productConfigs.CLARITY);
    ReactGA.initialize(productConfigs.GA);
  }, []);

  const checkUserRestriction = async () => {
    setLoading(true);
    const isLoggedIn = await isLoggedType();

    if (!isLoggedIn) {
      // If not logged in, they can go anywhere
      setLoading(false);
      return;
    }

    if (isLoggedIn) {
      if (isLoggedIn === "user") {
        if (userRestrictions.includes(asPath)) {
          router.back();
          return;
        }
      } else if (isLoggedIn === "professional") {
        if (!professionalRestrictions.includes(asPath)) {
          router.back();
          return;
        }
      } else {
        if (!adminRestrictions.includes(asPath)) {
          router.back();
          return;
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    checkUserRestriction();
  }, [asPath]);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {isLoading && <Loader />}
        <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default MyApp;
