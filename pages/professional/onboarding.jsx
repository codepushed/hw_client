import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Header from "../../components/Header";
import { formatPhoneNumber, validateAadhaar } from "../../helpers/basic";
import { professionalSignUp } from "../../helpers";

const Onboarding = () => {
  const [fullname, setFullName] = useState();
  const [aadhaarNumber, setAdhaarNumber] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [phoneWithCountryCode, setPhoneWithCountryCode] = useState();
  const [isOtpSent, setIsOtpSent] = useState();
  const [isOtpVerified, setIsOtpVerified] = useState();
  const [reCaptcha, setRecaptcha] = useState();
  const [OTP, setOTP] = useState();
  const router = useRouter();

  const userSignIn = async () => {
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
          Cookies.set("userData", JSON.stringify(response));
          router.push("/");
        } else {
          alert("Sign up error: Please enter name, email and password ");
        }
      }
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!reCaptcha) {
      alert("erroer");
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
        setIsOtpVerified(result?.user);
      })
      .catch((error) => {
        console.error("Error verifying OTP", error);
      });
  };

  return (
    <div className="professionalLoginContainer">
      <Header />
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
                    // placeholder=""
                    onChange={(e) => setOTP(e.target.value)}
                    minLength="6"
                    maxLength="6"
                    pattern="^\d{6}$"
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
              </button>
            ) : (
              !isOtpVerified && (
                <button
                  className="basicRoundedButton basiclongBtn"
                  style={{ marginTop: "20px" }}
                  onClick={(e) => handleVerifyOTP(e)}
                >
                  Verify
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
