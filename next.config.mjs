/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  publicRuntimeConfig: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    MICROSOFT_CLARITY_TOKEN: process.env.MICROSOFT_CLARITY_TOKEN,
    GA: process.env.GA,
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
    FIREBASE_API_KEY: process.env.FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_APP_ID,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_APP_ID,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
};

export default nextConfig;
