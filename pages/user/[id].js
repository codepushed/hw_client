import React from "react";

import Header from "../../components/Header";
import Profile from "../../Containers/User/profile";

import { profile } from "../../helpers";

const User = () => {
  // console.log(data, "pro");
  return (
    <>
      <Header />
      <Profile  />
    </>
  );
};

User.getInitialProps = async (ctx) => {
  return { isHeader: true }
  // try {
  //   const response = await profile();
  //   if (response) {
  //     const data = {
  //       name: response.name,
  //       email: response.email,
  //       accountCreationDate: response.createdAt,
  //     };
  //     console.log(response);
  //     return { response };
  //   }
  //   return {};
  // } catch (err) {
  //   console.log(err);
  // }
};

export default User;
