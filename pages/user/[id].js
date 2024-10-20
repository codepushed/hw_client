import React from "react";

import Header from "../../components/Header";
import Profile from "../../Containers/User/profile";

import { profile } from "../../helpers";

const User = ({ data }) => {
  return (
    <>
      <Header />
      <Profile  />
    </>
  );
};

User.getInitialProps = async (ctx) => {
  try {
    const response = await profile();
    if (response) {
      const data = {
        name: response.name,
        email: response.email,
        accountCreationDate: response.createdAt,
      };
      return { response };
    }
    return {};
  } catch (err) {
    console.log(err);
  }
};

export default User;
