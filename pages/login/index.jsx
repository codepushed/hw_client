import React from "react";

import Header from "../../components/Header";

const Login = () => {
  return (
    <div>
      <Header isHidden={true} />

      <div className="loginContainer">
        <div className="loginLeftContent">
          <div className="loginLeftContentHeading">
            <h1>Welcome Abroad</h1>
            <p>Log in to get things moving</p>
          </div>


          <div className="loginleftContentForm">
            <p>What's your email?</p>
            <input type="text" placeholder="hi@gmail.com" />
            <p style={{ marginTop: "20px" }}>Password, please</p>

            <input type="password" placeholder="*********" />

            <button
              className="basicRoundedButton basiclongBtn"
              style={{ marginTop: "20px" }}
            >
              Login
            </button>
          </div>

          <p>Forgot password</p>

          <span>
            <p>Don't have an account?</p> Signup
          </span>

          {/* <div>
            <p>Or</p>
            <button>Login with google</button>
          </div> */}
        </div>

        <div className="loginRightContent">
          <img src="/assets/login.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
