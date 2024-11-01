import Head from "next/head";

const ElectricianBlogSeo = () => {
  const seoTitle =
    "Signs You Need to Call an Electrician for Your Home in Gwalior";
  const seoDesc =
    "Discover the crucial signs that indicate you need to call an electrician in Gwalior. From flickering lights to burning smells, learn how to keep your home safe!";
  const brandUrl =
    "https://homeworkservice.in/assets/ryc-xd-fcWD1e__Q6I-unsplash.jpg";

  return (
    <Head>
      <title>
        Signs You Need to Call an Electrician for Your Home in Gwalior
      </title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDesc} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://homeworkservice.in/blogs/signs-you-need-to-call-an-electrician-for-your-home"
      />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={brandUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://homeworkservice.in/blogs/signs-you-need-to-call-an-electrician-for-your-home"
      />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={brandUrl} />
    </Head>
  );
};

export default ElectricianBlogSeo;
