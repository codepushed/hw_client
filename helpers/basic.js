import Cookies from "js-cookie";

export const validateEmailAndPassword = (email, password) => {
  if (!email || email.trim() === "") {
    return false;
  }

  if (!password || password.trim() === "") {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
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

export const isLoggedType = () => {
  const isLoggedIn = Cookies.get("userData");
  if (isLoggedIn) {
    const userName = JSON.parse(isLoggedIn);
    if (userName?.user?.role) {
      return userName?.user?.role;
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

export const formatTime = (hours) => {
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;
  return `${formattedHour}:00 ${ampm}`;
};

export const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
};

export const formatDay = (date) => {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
  });
};

export const getNextThreeDates = () => {
  const dates = [];
  for (let i = 0; i < 3; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
};

export const generateTimeSlots = (startHour, endHour, filterPastSlots) => {
  const slots = [];
  const currentTime = new Date().getHours();

  for (let i = startHour; i < endHour; i++) {
    if (!filterPastSlots || i >= currentTime) {
      slots.push(formatTime(i));
    }
  }

  return slots;
};

export const validateAadhaar = (aadhaarNumber) => {
  const aadhaarRegex = /^\d{12}$/;
  return aadhaarRegex.test(aadhaarNumber);
};

export const formatPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d{10}$/;
  if (phoneRegex.test(phoneNumber)) {
    return `+91${phoneNumber}`;
  }
  return null;
};

export function getRandomObject(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return null; // or handle the case when there are no objects available
  }

  // Generate a random index based on the length of the array
  const randomIndex = Math.floor(Math.random() * arr.length);

  // Return the random object
  return arr[randomIndex];
}

export const createSlug = (blogName) => {
  if (!blogName || typeof blogName !== "string") {
    throw new Error("Invalid input. Please provide a valid string.");
  }

  return blogName
    .trim() // Remove leading and trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Ensure no consecutive hyphens
};

export const convertISODate = (isoString) => {
  const date = new Date(isoString);

  // Format the date into a readable format (e.g., MM/DD/YYYY, HH:MM:SS)
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Use 12-hour format
  };

  return date.toLocaleString("en-US", options); // Customize locale and format as needed
};

export const getLoggedInUserDetails = () => {
  const userData = Cookies.get("userData");
  if (userData) {
    const userName = JSON.parse(userData);
    const user = userName?.user;
    return user;
  }
};
