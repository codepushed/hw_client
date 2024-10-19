/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  publicRuntimeConfig: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    MICROSOFT_CLARITY_TOKEN: process.env.MICROSOFT_CLARITY_TOKEN,
    GA: process.env.GA,
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API
  },
};

export default nextConfig;
