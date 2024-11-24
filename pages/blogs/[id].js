import React from "react";
import { isMobile } from "react-device-detect";

import Blog from "../../Containers/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BlogSeo } from "../../Seo/blog";

const Blogs = ({ isHeader }) => {
  return (
    <>
      <BlogSeo />
      <Header isMobileHeader={isMobile} />
      <Blog isHeader={isHeader} />
      <Footer />
    </>
  );
};

Blogs.getInitialProps = async (ctx) => {
  return { isHeader: true };
};

export default Blogs;
