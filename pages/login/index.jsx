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

          <div className="loginleftContentSignup">
            <p>Forgot password</p>
            
          </div>

          <div className="loginLeftContentSignupPara ">
            <p>Don't have an account?</p>
            <span>Signup</span>
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
              Login with google
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

export default Login;
