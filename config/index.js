import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const productConfigs = {
  CLARITY: publicRuntimeConfig.MICROSOFT_CLARITY_TOKEN,
  GA: publicRuntimeConfig.GA
};

export default productConfigs;
