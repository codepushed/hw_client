import React from "react";

import Header from "../../components/Header";
import Profile from "../../Containers/User/profile";

const User = ({ isHeader }) => {
  return (
    <>
    <Header />
    <Profile />
    </>
  );
};

User.getInitialProps = async (ctx) => {
  return { isHeader: true };
 
};

export default User;
