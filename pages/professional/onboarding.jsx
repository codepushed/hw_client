import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";

import { formatPhoneNumber, validateAadhaar } from "../../helpers/basic";
import { professionalSignUp } from "../../helpers";
import { auth } from "../../config/firebase";

const Onboarding = () => {
  const [fullname, setFullName] = useState();
  const [aadhaarNumber, setAdhaarNumber] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [phoneWithCountryCode, setPhoneWithCountryCode] = useState();
  const [isOtpSent, setIsOtpSent] = useState();
  const [isOtpVerified, setIsOtpVerified] = useState();
  const [reCaptcha, setRecaptcha] = useState();
  const [OTP, setOTP] = useState();
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userSignIn = async () => {
    setIsLoading(true);
    if (phoneNo) {
      const isAdhaarValid = validateAadhaar(aadhaarNumber);
      const isPhoneValid = formatPhoneNumber(phoneNo);
      if (isAdhaarValid && isPhoneValid) {
        setPhoneWithCountryCode(isPhoneValid);
        if (fullname && aadhaarNumber && phoneNo) {
          const data = {
            name: fullname,
            adhaarNumber: aadhaarNumber,
            phone: isPhoneValid,
          };
          const response = await professionalSignUp(data);
          if (response?.token) {
            setIsLoading(false);
            setOpenSnackbar(true);
            setSnackbarMsg("Hey, Welcome onboard Professional!");
            setSnack(true);
            Cookies.set("userData", JSON.stringify(response));
            router.push("/professional/dashboard");
          } else {
            setIsLoading(false);
            setOpenSnackbar(true);
            setSnackbarMsg("Oops! Something went wrong, Try again later");
            setSnack(false);
          }
        }
      }
    } else {
      setIsLoading(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Please enter phone number first!");
      setSnack(false);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!reCaptcha) {
      setOpenSnackbar(true);
      setSnackbarMsg("Recaptcha not available, try again later");
      setSnack(false);
    }

    try {
      const isPhoneValid = formatPhoneNumber(phoneNo);
      const confirmationResults = await signInWithPhoneNumber(
        auth,
        isPhoneValid,
        reCaptcha
      );
      setIsOtpSent(confirmationResults);
    } catch (error) {
      setIsLoading(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Oops! Something went wrong, Try again later");
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
        setIsOtpVerified(result?.user);
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
      <Header isHidden={true} isMobileHeader={isMobile} />
      <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
      <div className="professionalLogin">
        <h1>Sign Up</h1>
        <p>to become a Service Professional</p>
        <div className="professionalVerificationHead">
          <div className="professionalVerificationContainer">
            {isOtpVerified && isOtpVerified ? (
              <>
                <span className="professionalVerificationInput">
                  <p>Full name</p>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </span>
                <span className="professionalVerificationInput">
                  <p>Aadhaar number</p>
                  <input
                    type="number"
                    value={aadhaarNumber}
                    onChange={(e) => setAdhaarNumber(e.target.value)}
                  />
                </span>
                <button
                  className="basicRoundedButton pingUsBtn joinBtn"
                  onClick={() => userSignIn()}
                >
                  Submit
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
              </>
            ) : isOtpSent !== "undefined" && !isOtpSent ? (
              <div style={{ margin: "10px 0", width: "100%" }}>
                <p style={{ textAlign: "left", marginBottom: "20px" }}>
                  What's your phone number?
                </p>
                <span className="professionalVerificationInput">
                  <input
                    type="text"
                    // placeholder=""
                    style={{
                      paddingLeft: "10px",
                      outline: "none",
                      width: "-webkit-fill-available",
                    }}
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </span>
              </div>
            ) : (
              <div style={{ margin: "10px 0", width: "100%" }}>
                <p style={{ textAlign: "left", marginBottom: "20px" }}>
                  Enter the OTP
                </p>
                <span className="professionalVerificationInput">
                  <input
                    type="text"
                    value={OTP || ""}
                    onChange={(e) => handleOTPChange(e)}
                    min={6}
                    max={6}
                    style={{
                      paddingLeft: "10px",
                      outline: "none",
                      width: "-webkit-fill-available",
                    }}
                  />
                </span>
              </div>
            )}

            {isOtpSent !== "undefined" && !isOtpSent ? (
              <button
                className="basicRoundedButton basiclongBtn"
                style={{ marginTop: "20px" }}
                onClick={(e) => handleSendOTP(e)}
              >
                Sign up
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
              !isOtpVerified && (
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
              )
            )}
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Onboarding;
