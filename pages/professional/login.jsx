import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

import { auth } from "../../config/firebase";

import Header from "../../components/Header";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState();
  const [reCaptcha, setRecaptcha] = useState();
  const [isOtpSent, setIsOtpSent] = useState();
  const [OTP, setOTP] = useState();
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
            router.push("/professional/dashboard");
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
    <div className="professionalLoginContainer">
      <Header isHidden={true} />
      <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
      <div className="professionalLogin">
        <h1>Login</h1>
        <p>Access your dashboard and</p>
        <p className="professionalLoginSubHeading">
          start receiving job requests
        </p>

        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection">
            {isOtpSent !== "undefined" && !isOtpSent ? (
              <>
                <p>What's your phone number?</p>
                <input
                  style={{ marginTop: "10px" }}
                  type="text"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </>
            ) : (
              <>
                <p>Enter the OTP</p>
                <input
                  type="text"
                  onChange={(e) => handleOTPChange(e)}
                  min={6}
                  max={6}
                  value={OTP || ""}
                />
              </>
            )}

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
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
