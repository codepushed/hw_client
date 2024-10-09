import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const productConfigs = {
  CLARITY: publicRuntimeConfig.MICROSOFT_CLARITY_TOKEN,
  GA: publicRuntimeConfig.GA,
  GOOGLE_MAPS_API: publicRuntimeConfig.GOOGLE_MAPS_API
};

export default productConfigs;
