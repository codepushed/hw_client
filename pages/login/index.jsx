import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Snackbars from "../../components/Snackbars";

import { login } from "../../helpers";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState();
  const [reCaptcha, setRecaptcha] = useState();
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState();
  const [OTP, setOTP] = useState();
  const router = useRouter();

  const handleSendOTP = async (e) => {
    if (phoneNo) {
      setIsLoading(true);
      e.preventDefault();

      if (!reCaptcha) {
        setOpenSnackbar(true);
        setSnackbarMsg("Recaptcha not available, try again later");
        setSnack(false);
      }

      try {
        const confirmationResults = await signInWithPhoneNumber(
          auth,
          phoneNo,
          reCaptcha
        );
        setIsLoading(false);
        setIsOtpSent(confirmationResults);
      } catch (error) {
        setIsLoading(false);
        setOpenSnackbar(true);
        setSnackbarMsg("Oops! Something went wrong, Try again later");
        setSnack(false);
      }
    } else {
      setIsLoading(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Please enter phone number first!");
      setSnack(false);
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
    setIsLoading(true);
    if (!isOtpSent && !OTP) {
      setOpenSnackbar(true);
      setSnackbarMsg("Please enter the OTP first.");
      setSnack(false);
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
            setIsLoading(false);
            setOpenSnackbar(true);
            setSnackbarMsg("Hey, Welcome back!");
            setSnack(true);
            Cookies.set("userData", JSON.stringify(response));
            router.push("/");
          }
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setOpenSnackbar(true);
        setSnackbarMsg("Error verifying OTP, Please try again");
        setSnack(false);
      });
  };

  const handlePhoneNo = (e) => {
    setPhoneNo("+91" + e.target.value);
  };

  const handleOTPChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setOTP(value);

      if (value.length > 6) {
        setOpenSnackbar(true);
        setSnackbarMsg("Please enter exactly 6 digits");
        setSnack(false);
      }
    }
  };

  return (
    <div>
      <Header isHidden={true} />
      <div className="loginContainer">
        <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
        <div className="loginLeftContent">
          <div className="loginLeftContentHeading">
            <h1>Welcome Abroad</h1>
            <p>Log in to get things moving</p>
          </div>

          <div className="loginleftContentForm">
            {isOtpSent !== "undefined" && !isOtpSent ? (
              <>
                <p>What's your phone number?</p>
                <input type="text" onChange={(e) => handlePhoneNo(e)} />
              </>
            ) : (
              <>
                <p>Enter the OTP</p>
                <input
                  type="text"
                  value={OTP || ""}
                  onChange={(e) => handleOTPChange(e)}
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
                    style={{
                      height: "10px",
                      width: "10px",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
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
                {isLoading && (
                  <CircularProgress
                    style={{
                      height: "10px",
                      width: "10px",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  />
                )}
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
