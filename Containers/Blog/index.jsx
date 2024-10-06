import React from "react";
import { useRouter } from "next/router";

import { blogs } from "../../Static/blogs";
import Image from "next/image";

const Blog = () => {
  const router = useRouter();
  
  return (
    <div className="blogsContainer">
      <div className="blogsSubContainer">
        <div className="blogsSubHeader">
          <h1 className="blogTitle">{blogs[0].title}</h1>

          <div className="blogAuthorDetailsContainer">
            <span className="blogAuthor">
              <Image src="/assets/bloggerprofile.png" alt="bloggerprofile" height={500} width={500} />
            </span>

            <div className="blogAuthorDetailsContent">
              <div className="blogAuthorDetails">
                <p>Dharika Jain</p>
                <p className="BlogAuthorCategory">Author</p>
              </div>

              <p className="BlogAuthorCategory">8 Sept 2024</p>
            </div>
          </div>

          <p>{blogs[0].desc}</p>
          <div className="blogHeaderImg">
            <Image src={blogs[0].titleImg} alt="salon services" height={500} width={500} />
          </div>
        </div>

        {blogs[0].subheading.map((item, index) => (
          <div className="blogsSub" key={index}>
            <h1 className="blogsSubTitle">{item.title}</h1>

            <div className="blogHeaderImg">
              {item.img &&
                item?.img.map((images, index) => (
                  <Image src={images} alt="salon services" key={index} height={500} width={500} />
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

      <div className="blogServiceContainer">
        <h1>Our services</h1>

        <div className="blogServiceContent">
          <h1>Curls & waves styling</h1>

          <span className="blogServiceImgContainer">
            <Image
              src="/assets/Joyful Young Woman in Grayscale Background Removed.png"
              alt="blogservice"
              height={500} width={500}
            />
          </span>

          <button
            className="basicRoundedButton blogServiceBtn"
            onClick={() =>
              router.push(
                "/services/salon/women-salon"
              )
            }
          >
            Explore
          </button>
          <p className="blogServiceDesc">
            Create curls or waves using curling irons, rollers, or other styling
            tools.
          </p>
          <p className="blogServiceDesc">
            Adds volume and texture to hair for a dynamic and stylish look.
          </p>
        </div>

        <div className="blogServiceContent" style={{ marginTop: "20px" }}>
          <h1>Tan removal treatment</h1>

          <span className="blogServiceImgContainer">
            <Image
              src="/assets/Indulgent Beauty Treatment.jpg"
              alt="blogservice"
              style={{ objectFit: "cover" }}
              height={500} width={500}
            />
          </span>

          <button
            className="basicRoundedButton blogServiceBtn"
            onClick={() =>
              router.push(
                "/services/salon/women-salon"
              )
            }
          >
            Explore
          </button>
          <p className="blogServiceDesc">
            Use specialized products to lighten and remove tan from the skin.
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
    </div>
  );
};

export default Blog;
