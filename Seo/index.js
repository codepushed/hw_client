import Head from "next/head";

const LandingSeo = () => {
  const seoTitle = "Homework - Service at your doorstep";
  const seoDesc =
    "Book services like plumbing, electrical work, cleaning, and more with just one tap. Our platform connects you with professionals at your doorstep.";
  const brandUrl = "https://homeworkservice.in/assets/Group 46.png";

  return (
    <Head>
      <title>Homework - Service at your doorstep</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://homeworkservice.in" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={brandUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://homeworkservice.in" />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={brandUrl} />
    </Head>
  );
};

export { LandingSeo };
