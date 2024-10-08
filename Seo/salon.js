import Head from "next/head";

 const SalonSeo = () => {
  const seoTitle = "Best Salon Home Service in Gwalior | Beauty at Your Doorstep";
  const seoDesc =
    "Create a catchy meta description that includes your main keyword and your unique selling point (e.g., doorstep service)";
  const brandUrl = "https://homeworkservice.in/collectionofhairstyles.png";

  return (
    <Head>
      <title>Best Salon Home Service in Gwalior | Beauty at Your Doorstep</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDesc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://homeworkservice.in/services/salon/women-salon" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={brandUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://homeworkservice.in/services/salon/women-salon" />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={brandUrl} />
    </Head>
  );
};

export default SalonSeo;
