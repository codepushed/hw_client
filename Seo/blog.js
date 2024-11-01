import Head from "next/head";

export const BlogSeo = () => {
  const seoTitle = "Home Salon Services in Gwalior: The Key to Convenient Self-Care";
  const seoDesc =
    "Discover the benefits of home salon services in Gwalior. Enjoy professional beauty treatments at your doorstep. Pamper yourself with expert care without the salon hassle!";
  const brandUrl = "https://homeworkservice.in/collectionofhairstyles.png";

  return (
    <Head>
      <title>Home Salon Services in Gwalior: The Key to Convenient Self-Care</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDesc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://homeworkservice.in/blogs/why-pay-more-at-salons" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={brandUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://homeworkservice.in/blogs/why-pay-more-at-salons" />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={brandUrl} />
    </Head>
  );
};
