import React from "react";

import BlogListing from "../../Containers/Blog/BlogListing";
import Header from "../../components/Header";

const BlogList = ({ isHeader }) => {
  return (
    <>
      <Header />
      <BlogListing isHeader={isHeader} />
    </>
  );
};

BlogList.getInitialProps = async (ctx) => {
  return { isHeader: true };
};

export default BlogList;
