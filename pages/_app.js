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

import "../styles/global.css";
import "../styles/scss/style.scss";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  let persistor = persistStore(store);

  useEffect(() => {
    clarity.init(productConfigs.CLARITY);
    ReactGA.initialize(productConfigs.GA);
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {isLoading && <Loader />}
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
