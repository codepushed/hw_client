import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { auth } from "../../config/firebase";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Header from "../../components/Header";
import { signup } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";
import Snackbars from "../../components/Snackbars";

const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
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
          setIsLoading(false);
          setOpenSnackbar(true);
          setSnackbarMsg("Hey, Welcome onboard!");
          setSnack(true);
          Cookies.set("userData", JSON.stringify(response));
          router.push("/");
        } else {
          setIsLoading(false);
          setOpenSnackbar(true);
          setSnackbarMsg("Oops! Something went wrong, Try again later");
          setSnack(false);
        }
      }
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
      const confirmationResults = await signInWithPhoneNumber(
        auth,
        phone,
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
    <div>
      <Header isHidden={true} />
      <div className="loginContainer">
        <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
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
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <p style={{ marginTop: "20px" }}>Email</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ marginTop: "20px" }}> Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
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
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
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
