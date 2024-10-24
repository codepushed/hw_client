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
    const parsedData = JSON.parse(userData);
    if (parsedData) {
      accessToken = parsedData.token;
    }
  }
  return accessToken;
};

export const toLowerCaseString = (str) => {
  return str.toLowerCase();
};

export const cartPriceCalculator = (rate) => {
  const totalPrice = rate.reduce((acc, item) => {
    return acc + Number(item.price); 
  }, 0);

  return totalPrice;
};

export const gstCalculation = (rate) => {
  const totalPrice = rate.reduce((acc, item) => {
    return acc + Number(item.price); 
  }, 0);

  const gst = (totalPrice * 18) / 100; 

  return gst;
};

export const totalPriceWithGst = (rate) => {
  const totalPrice = rate.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const gst = (totalPrice * 18) / 100;

  return totalPrice + gst; 
};