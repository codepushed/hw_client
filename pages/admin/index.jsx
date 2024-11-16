import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { CircularProgress } from "@mui/material";

import { login } from "../../helpers";
import { validateEmailAndPassword } from "../../helpers/basic";
import Snackbars from "../../components/Snackbars";

const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAdminLogin = async () => {
    const isEmailPasswordValid = validateEmailAndPassword(email, password);
    setIsLoading(true);
    if (isEmailPasswordValid) {
      if (email && password) {
        const data = {
          email: email,
          password: password,
        };
        const response = await login(data);
        if (response) {
          if (response?.token) {
            Cookies.set("userData", JSON.stringify(response));
            setIsLoading(false);
            setOpenSnackbar(true);
            setSnackbarMsg("Hey, Welcome back admin");
            setSnack(true);
          } else {
            setIsLoading(false);
            setOpenSnackbar(true);
            setSnackbarMsg("login error: Please enter email and password");
            setSnack(false);
          }
          router.push("/admin/dashboard");
        } else {
          router.push("/admin");
        }
      } else {
        setIsLoading(false);
        setOpenSnackbar(true);
        setSnackbarMsg("Please enter email and password");
        setSnack(false);
      }
    } else {
      setIsLoading(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Email or password is not valid!");
      setSnack(false);
    }
  };

  return (
    <div className="adminContainer">
      <h1>Admin</h1>
      <div className="adminLoginContainer">
        <p>Login</p>
        <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="adminEmailInput"
          placeholder="Enter email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="adminEmailInput"
          placeholder="Enter password"
        />

        <button
          onClick={() => handleAdminLogin()}
          className="basicRoundedButton"
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
      </div>
    </div>
  );
};

export default Admin;
