import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const productConfigs = {
  REACT_APP_API_URL: publicRuntimeConfig.REACT_APP_API_URL,
  CLARITY: publicRuntimeConfig.MICROSOFT_CLARITY_TOKEN,
  GA: publicRuntimeConfig.GA,
  GOOGLE_MAPS_API: publicRuntimeConfig.GOOGLE_MAPS_API,
  FIREBASE_API_KEY: publicRuntimeConfig.FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN: publicRuntimeConfig.FIREBASE_APP_ID,
  FIREBASE_PROJECT_ID: publicRuntimeConfig.FIREBASE_APP_ID,
  FIREBASE_STORAGE_BUCKET: publicRuntimeConfig.FIREBASE_APP_ID,
  FIREBASE_MESSAGING_SENDER_ID: publicRuntimeConfig.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: publicRuntimeConfig.FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: publicRuntimeConfig.FIREBASE_MEASUREMENT_ID,
};

export default productConfigs;
