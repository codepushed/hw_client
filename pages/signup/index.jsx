import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Header from "../../components/Header";
import { signup } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";

const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [reCaptcha, setRecaptcha] = useState();
  const [isOtpSent, setIsOtpSent] = useState();
  const [isOtpVerified, setIsOtpVerified] = useState();
  const [OTP, setOTP] = useState();
  const router = useRouter();

  const userSignIn = async () => {
    setIsLoading(true);
    const isEmailPasswordValid = validateEmailAndPassword(email, password);
    if (isEmailPasswordValid) {
      if (email && password && name && phone) {
        const phoneNumber = phone.replace(/^\+91/, "");
        const data = {
          name: name,
          email: email,
          password: password,
          phone: phoneNumber,
        };
        const response = await signup(data);
        if (response?.token) {
          Cookies.set("userData", JSON.stringify(response));
          setIsLoading(false);
          router.push("/");
          setIsLoading(false);
        } else {
          setIsLoading(false);
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
      const confirmationResults = await signInWithPhoneNumber(
        auth,
        phone,
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
            {isOtpVerified && isOtpVerified ? (
              <>
                <p>Full name</p>
                <input
                  type="text"
                  placeholder="Shristi sharma"
                  onChange={(e) => setName(e.target.value)}
                />
                <p style={{ marginTop: "20px" }}>Email</p>
                <input
                  type="number"
                  placeholder="9617373159"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ marginTop: "20px" }}> Password</p>
                <input
                  type="password"
                  placeholder="*********"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="basicRoundedButton basiclongBtn"
                  style={{ marginTop: "20px" }}
                  onClick={() => userSignIn()}
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
              </>
            ) : isOtpSent !== "undefined" && !isOtpSent ? (
              <>
                <p>What's your phone number?</p>
                <input
                  type="text"
                  // placeholder=""
                  onChange={(e) => setPhone(e.target.value)}
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
                Sign up
                {isLoading && (
                  <CircularProgress
                    style={{ height: "10px", width: "10px", color: "#fff" }}
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
                </button>
              )
            )}
          </div>

          {/* <div className="loginleftContentSignup loginAlternative">
            <p>Or</p> */}
          {/* </div> */}

          {/* <div className="loginWithGooglebtnContainer">
            <button className="buttonWithIcon loginWithGoogleIcon">
              <img
                src="/assets/googleIcon.png"
                alt="google"
                className="googleIcon"
              />
              Signup with google
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

export default Signup;
