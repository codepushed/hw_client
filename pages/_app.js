import React from "react";

import "../styles/global.css";
import "../styles/scss/style.scss";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
