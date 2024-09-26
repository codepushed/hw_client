/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  publicRuntimeConfig: {
    MICROSOFT_CLARITY_TOKEN: process.env.MICROSOFT_CLARITY_TOKEN,
    GA: process.env.GA,
  },
};

export default nextConfig;
