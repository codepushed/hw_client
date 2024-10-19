import Cookies from "js-cookie";

export const validateEmailAndPassword = (email, password) => {
  if (!email || email.trim() === "") {
    alert("Email should not be empty");
    return false;
  }

  if (!password || password.trim() === "") {
    alert("Password should not be empty");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  return true;
};

export const isLoggedIn = () => {
  const isLoggedIn = Cookies.get("userData");
  if (isLoggedIn) {
    const userName = JSON.parse(isLoggedIn);
    if (userName.token) {
      return true;
    }
  }
};

export const getAccessToken = () => {
  const userData = Cookies.get("userData");
  let accessToken = "";
  if (userData) {
    accessToken = parseData(userData.token);
  }
  return accessToken;
};
