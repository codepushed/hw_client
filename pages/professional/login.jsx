import React from "react";

import Header from "../../components/Header";

const Login = () => {
  return (
    <div className="professionalLoginContainer">
      <Header />
      <div className="professionalLogin">
        <h1>Login</h1>
        <p>Access your dashboard and</p>
        <p className="professionalLoginSubHeading">
          start receiving job requests
        </p>

        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection">
            <h3>Enter Phone no</h3>
            <input type="text" />
            <button className="basicRoundedButton profOtpbtn">Get OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
