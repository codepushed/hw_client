import React from "react";
import { isMobile } from "react-device-detect";

import BlogListing from "../../Containers/Blog/BlogListing";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BlogSeo } from "../../Seo/blog";
import { blogs } from "../../Static/blogs";

const BlogList = ({ isHeader, blog }) => {
  return (
    <>
      <Header isMobileHeader={isMobile} />
      <BlogSeo />
      <BlogListing isHeader={isHeader} blogs={blog} />
      <Footer />
    </>
  );
};

BlogList.getInitialProps = async (ctx) => {
  return { isHeader: true, blog: blogs };
};

export default BlogList;
