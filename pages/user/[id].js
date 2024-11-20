import React from "react";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";
import Profile from "../../Containers/User/profile";

import { profile } from "../../helpers";

const User = ({ data }) => {
  return (
    <>
      <Header isMobileHeader={isMobile} />
      <Profile data={data} />
    </>
  );
};

User.getInitialProps = async (ctx) => {
  try {
    const response = await profile();
    if (response) {
      const data = {
        name: response?.user?.name,
        email: response?.user?.email,
        accountCreationDate: response?.user?.createdAt,
      };
      return { data };
    }
    return {};
  } catch (err) {
    console.log(err);
  }
};

export default User;
