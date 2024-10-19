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