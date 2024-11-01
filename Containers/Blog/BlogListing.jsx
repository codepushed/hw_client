import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { createSlug } from "../../helpers/basic";

const BlogListing = ({ blogs }) => {
  const router = useRouter();

  const handleClick = (title) => {
    const slug = createSlug(title);
    router.push(`/blogs/${slug}`);
  };

  return (
    <div className="blogListingContainer">
      <h1 className="blogListingHeading">Blogs</h1>
      <div className="blogListingCardList">
        {blogs?.map((items, index) => (
          <div
            className="blogListingCard"
            onClick={() => handleClick(items.title)}
            key={index}
          >
            <div className="blogListingImg">
              <Image
                src={items.titleImg}
                alt="blogImags"
                height={500}
                width={500}
              />
            </div>
            <p className="blogListingTitle">{items.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
