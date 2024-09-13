import React from "react";

import BlogListing from "../../Containers/Blog/BlogListing";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BlogList = ({ isHeader }) => {
  return (
    <>
      <Header />
      <BlogListing isHeader={isHeader} />
      <Footer />
    </>
  );
};

BlogList.getInitialProps = async (ctx) => {
  return { isHeader: true };
};

export default BlogList;
