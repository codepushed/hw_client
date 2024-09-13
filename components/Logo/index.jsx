import React from "react";

import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="headerLogo" onClick={() => router.push("/coming-soon")}>
      <h1>Homework</h1>
      <p>Service at your Doorstep</p>
    </div>
  );
};

export default Logo;
