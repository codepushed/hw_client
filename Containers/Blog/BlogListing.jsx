import React from "react";
import { useRouter } from "next/router";

const BlogListing = () => {
    const router = useRouter();

  return (
    <div className="blogListingContainer">
      <h1 className="blogListingHeading">Blogs</h1>
      <div className="blogListingCardList">
        <div className="blogListingCard" onClick={() => router.push("/blogs/why-pay-more-at-salons")} >
          <div className="blogListingImg">
            <img src="/assets/collectionofhairstyles.png" alt="" />
          </div>

          <p className="blogListingTitle">
            Why Pay More at Salons? Get Celebrity-Style Beauty Services at Home!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
