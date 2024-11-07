import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase"; // Adjust the path based on your structure
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import { login } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";
import conf from "../../config";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState();
  const [reCaptcha, setRecaptcha] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState();
  const [OTP, setOTP] = useState();
  const router = useRouter();

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!reCaptcha) {
      alert("erroer");
    }

    try {
      const confirmationResults = await signInWithPhoneNumber(
        auth,
        phoneNo,
        reCaptcha
      );
      setIsOtpSent(confirmationResults);
    } catch (error) {
      alert(error);
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

  const handleVerifyOTP = () => {
    if (!isOtpSent) {
      alert("Please send OTP first.");
      return;
    }

    isOtpSent
      .confirm(OTP)
      .then(async (result) => {
        const user = result.user;
        if (phoneNo) {
          const phoneNumber = phoneNo.replace(/^\+91/, "");
          const data = {
            phone: phoneNumber,
          };
          const response = await login(data);
          if (response?.token) {
            Cookies.set("userData", JSON.stringify(response));
            router.push("/");
          }
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP", error);
      });
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
            {isOtpSent !== "undefined" && !isOtpSent ? (
              <>
                <p>What's your phone number?</p>
                <input
                  type="text"
                  // placeholder=""
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </>
            ) : (
              <>
                <p>Enter the OTP</p>
                <input
                  type="text"
                  // placeholder=""
                  onChange={(e) => setOTP(e.target.value)}
                  min={6}
                  max={6}
                />
              </>
            )}

            {/* <p style={{ marginTop: "20px" }}>Password, please</p> */}
            {/* 
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            /> */}

            {isOtpSent !== "undefined" && !isOtpSent ? (
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
            ) : (
              <button
                className="basicRoundedButton basiclongBtn"
                style={{ marginTop: "20px" }}
                onClick={(e) => handleVerifyOTP(e)}
              >
                Verify
              </button>
            )}
          </div>
          <div className="loginleftContentForm donthaveAccount">
            <p>Don't have an account?</p>
            <p
              style={{ color: "#ff8c8c", cursor: "pointer" }}
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </p>
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
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
