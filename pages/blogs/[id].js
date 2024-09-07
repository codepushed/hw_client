import React from "react";

import Blog from "../../Containers/Blog";
import Header from "../../components/Header";

const Blogs = ({ isHeader }) => {
  return (
    <>
      <Header />
      <Blog isHeader={isHeader} />
    </>
  );
};

Blogs.getInitialProps = async (ctx) => {
  return { isHeader: true };
};

export default Blogs;
