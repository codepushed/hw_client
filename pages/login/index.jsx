import React, { useState } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";

import Header from "../../components/Header";
import { login } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const isEmailPasswordValid = validateEmailAndPassword(email, password);
    if (isEmailPasswordValid) {
      if (email && password) {
        const data = {
          email: email,
          password: password,
        };
        const response = await login(data);
        if (response?.token) {
          Cookies.set("userData", JSON.stringify(response));
          alert("logged in succesfully");
          setIsLoading(false);
        } else {
          setIsLoading(false);
          alert("login error: Please enter email and password");
        }
      }
    }
  };

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
            <p>What's your phone number?</p>
            <input
              type="number"
              placeholder="9617373159"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            {/* <p style={{ marginTop: "20px" }}>Password, please</p> */}
            {/* 
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            /> */}

            <button
              className="basicRoundedButton basiclongBtn"
              style={{ marginTop: "20px" }}
              onClick={() => handleLogin()}
            >
              Login
              {isLoading && (
                <CircularProgress
                  style={{ height: "10px", width: "10px", color: "#fff" }}
                />
              )}
            </button>
          </div>

          {/* <div className="loginleftContentSignup">
            <p>Forgot password</p>
          </div> */}

          {/* <div className="loginLeftContentSignupPara ">
            <p>Don't have an account?</p>
            <span>Signup</span>
          </div> */}

          {/* <div className="loginleftContentSignup loginAlternative">
            <p>Or</p>
          </div> */}

          {/* <div className="loginWithGooglebtnContainer">
            <button className="buttonWithIcon loginWithGoogleIcon">
              <img
                src="/assets/googleIcon.png"
                alt="google"
                className="googleIcon"
              />
              Login with google
            </button>
          </div> */}
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
