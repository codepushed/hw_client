import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { blogs } from "../../Static/blogs";

const Blog = () => {
  const [blogData, setBlogData] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const handleBlogData = () => {
    const paths = blogs.map((blog) => ({
      params: {
        id: blog.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
      },
    }));

    if (id) {
      const blog = blogs.find(
        (b) =>
          b.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "") === id
      );

      if (blog) {
        setBlogData(blog);
      } else {
        console.error("Blog not found!");
      }
    }
  };

  useEffect(() => {
    handleBlogData();
  }, [id, blogs]);

  return (
    <div className="blogsContainer">
      {blogData && (
        <>
          <div className="blogsSubContainer">
            <div className="blogsSubHeader">
              <h1 className="blogTitle">{blogData?.title}</h1>

              <div className="blogAuthorDetailsContainer">
                <span className="blogAuthor">
                  <Image
                    src="/assets/bloggerprofile.png"
                    alt="bloggerprofile"
                    height={500}
                    width={500}
                  />
                </span>

                <div className="blogAuthorDetailsContent">
                  <div className="blogAuthorDetails">
                    <p>{blogData.author}</p>
                    <p className="BlogAuthorCategory">Author</p>
                  </div>

                  <p className="BlogAuthorCategory">{blogData.date}</p>
                </div>
              </div>

              <p>{blogData.desc}</p>
              <div className="blogHeaderImg">
                <Image
                  src={blogData.titleImg}
                  alt="salon services"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            {blogData.subheading.map((item, index) => (
              <div className="blogsSub" key={index}>
                <h1 className="blogsSubTitle">{item.title}</h1>

                <div className="blogHeaderImg">
                  {item.img &&
                    item?.img.map((images, index) => (
                      <Image
                        src={images}
                        alt="salon services"
                        key={index}
                        height={500}
                        width={500}
                      />
                    ))}
                </div>

                <p>{item.desc}</p>
                <ul className="blogPoints">
                  {item.points &&
                    item.points.map((points, index) => (
                      <li key={index}>{points}</li>
                    ))}
                </ul>
                <p>{item.extra && item.extra}</p>
              </div>
            ))}
          </div>
          {id.includes(
            "signs-you-need-to-call-an-electrician-for-your-home"
          ) ? (
            ""
          ) : (
            <div className="blogServiceContainer">
              <h1>Our services</h1>

              <div className="blogServiceContent">
                <h1>Curls & waves styling</h1>

                <span className="blogServiceImgContainer">
                  <Image
                    src="/assets/Joyful Young Woman in Grayscale Background Removed.png"
                    alt="blogservice"
                    height={500}
                    width={500}
                  />
                </span>

                <button
                  className="basicRoundedButton blogServiceBtn"
                  onClick={() => router.push("/services/salon/women-salon")}
                >
                  Explore
                </button>
                <p className="blogServiceDesc">
                  Create curls or waves using curling irons, rollers, or other
                  styling tools.
                </p>
                <p className="blogServiceDesc">
                  Adds volume and texture to hair for a dynamic and stylish
                  look.
                </p>
              </div>

              <div className="blogServiceContent" style={{ marginTop: "20px" }}>
                <h1>Tan removal treatment</h1>

                <span className="blogServiceImgContainer">
                  <Image
                    src="/assets/Indulgent Beauty Treatment.jpg"
                    alt="blogservice"
                    style={{ objectFit: "cover" }}
                    height={500}
                    width={500}
                  />
                </span>

                <button
                  className="basicRoundedButton blogServiceBtn"
                  onClick={() => router.push("/services/salon/women-salon")}
                >
                  Explore
                </button>
                <p className="blogServiceDesc">
                  Use specialized products to lighten and remove tan from the
                  skin.
                </p>
                <p className="blogServiceDesc">
                  Brightens skin tone and reduces tan lines.
                </p>

                <button
                  className="basicRoundedButton blogServiceBtn"
                  style={{ width: "100%" }}
                  onClick={() => router.push("/services/salon/women-salon")}
                >
                  Explore All
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Blog;
