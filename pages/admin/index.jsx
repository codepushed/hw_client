import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { login } from "../../helpers";


const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const handleAdminLogin = async () => {
    if (email && password) {
      const data = {
        email: email,
        password: password,
      };
      const response = await login(data);
      if (response) {
        if (response?.token) {
          Cookies.set("userData", JSON.stringify(response));
          alert("logged in succesfully");
        } else {
          alert("login error: Please enter email and password");
        }
        router.push("/admin/dashboard");
      } else {
        router.push("/admin");
      }
    } else {
      alert("please enter email and password");
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      <p>Login</p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleAdminLogin()}>Login</button>
    </div>
  );
};

export default Admin;
