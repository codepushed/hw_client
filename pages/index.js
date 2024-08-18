import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div className="landingContainer">
      <Head>
      <link rel="icon" href="/hw_small.png" type="image/x-icon" />
      <link rel="shortcut icon" href="/hw_small.png" type="image/x-icon" />
        <title>Homework - Service at your doorstep</title>
      </Head>

      <div className="comingSoonContainer">
        <h1>One Tap to </h1>
        <div className="comingSoonImgContainer">
        <img src="/hw_big.png" alt="logo" />
        </div>
        <h1>Your Next <span style={{ color: "#98FF98" }}>Service</span></h1>
      </div>
    </div>
  );
};

export default Home;
