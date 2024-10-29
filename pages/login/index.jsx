import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase"; // Adjust the path based on your structure
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { CircularProgress } from "@mui/material";

import Header from "../../components/Header";
import { login } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";
import conf from "../../config";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [confirmResult, setConfirmResult] = useState();
  const [reCaptcha, setRecaptcha] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const recap = useRef();

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

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!reCaptcha) {
      console.log("erroer");
    }

    try {
      const confirmationResults = await signInWithPhoneNumber(
        auth,
        phoneNo,
        reCaptcha
      );
      console.log(confirmationResults, "hey")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    setRecaptcha(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, [auth]);

  return (
    <div>
      <Header isHidden={true} />
      <div className="loginContainer">
        <div id="recaptcha-container"></div>

        <div className="loginLeftContent">
          <div className="loginLeftContentHeading">
            <h1>Welcome Abroad</h1>
            <p>Log in to get things moving</p>
          </div>

          <div className="loginleftContentForm">
            <p>What's your phone number?</p>
            <input
              type="text"
              // placeholder=""
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
              onClick={(e) => handleSendOTP(e)}
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
