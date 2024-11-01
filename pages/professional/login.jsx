import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";

import Header from "../../components/Header";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState();
  const [reCaptcha, setRecaptcha] = useState();
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
    setPhoneNo("");

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
    <div className="professionalLoginContainer">
      <Header isHidden={true} />
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

            {isOtpSent !== "undefined" && !isOtpSent ? (
              <button
                className="basicRoundedButton basiclongBtn"
                style={{ marginTop: "20px" }}
                onClick={(e) => handleSendOTP(e)}
              >
                Login
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
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
