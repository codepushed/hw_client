import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const productConfigs = {
  REACT_APP_API_URL: publicRuntimeConfig.REACT_APP_API_URL,
  CLARITY: publicRuntimeConfig.MICROSOFT_CLARITY_TOKEN,
  GA: publicRuntimeConfig.GA,
  GOOGLE_MAPS_API: publicRuntimeConfig.GOOGLE_MAPS_API
};

export default productConfigs;
