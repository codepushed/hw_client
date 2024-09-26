import React from "react";

import Blog from "../../Containers/Blog";
import Header from "../../components/Header";
import { BlogSeo } from "../../Seo/blog";
import Footer from "../../components/Footer";

const Blogs = ({ isHeader }) => {
  return (
    <>
      <BlogSeo />
      <Header />
      <Blog isHeader={isHeader} />
      <Footer />
    </>
  );
};

Blogs.getInitialProps = async (ctx) => {
  return { isHeader: true };
};

export default Blogs;
