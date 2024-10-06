import React from "react";

import Header from "../../components/Header";

const Signup = () => {
  return (
    <div>
      <Header isHidden={true} />
      <div className="loginContainer">
        <div className="loginLeftContent">
          <div className="loginLeftContentHeading">
            <h1 style={{ fontSize: "20px" }}>
              New Here? Let’s Get You Set Up!
            </h1>
            <p>Create your account and start booking</p>
          </div>

          <div className="loginleftContentForm">
            <p>Full name</p>
            <input type="text" placeholder="hi@gmail.com" />
            <p style={{ marginTop: "20px" }}>Password</p>

            <input type="password" placeholder="*********" />

            <p style={{ marginTop: "20px" }}>Confirm password</p>

            <input type="password" placeholder="*********" />

            <button
              className="basicRoundedButton basiclongBtn"
              style={{ marginTop: "20px" }}
            >
              Sign up
            </button>
          </div>

          <div className="loginleftContentSignup loginAlternative">
            <p>Or</p>
          </div>

          <div className="loginWithGooglebtnContainer">
            <button className="buttonWithIcon loginWithGoogleIcon">
              <img
                src="/assets/googleIcon.png"
                alt="google"
                className="googleIcon"
              />
              Signup with google
            </button>
          </div>
        </div>

        <div className="loginRightContent">
          <h1 className="loginRightContentHead">Get your first</h1>
          <h1 className="loginRightContentSubHead">Booking done</h1>
          <div className="loginRightContentImg">
            <img src="/assets/hw_worker.png" alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
