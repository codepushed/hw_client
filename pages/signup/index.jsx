import React, { useState } from "react";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import { signup } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";

const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userSignIn = async () => {
    setIsLoading(true);
    const isEmailPasswordValid = validateEmailAndPassword(email, password);
    if (isEmailPasswordValid) {
      if (email && password && name) {
        const data = {
          name: name,
          email: email,
          password: password,
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
            <p>Full name</p>
            <input
              type="text"
              placeholder="Shristi sharma"
              onChange={(e) => setName(e.target.value)}
            />
            <p style={{ marginTop: "20px" }}>Email</p>

            <input
              type="email"
              placeholder="shristi@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p style={{ marginTop: "20px" }}>Phone</p>

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
    </div>
  );
};

export default Signup;
