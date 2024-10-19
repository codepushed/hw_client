import axios from "axios";
import _ from "lodash";

import endPoints from "./config/endpoints";
import conf from "./config";

import { getAccessToken } from "./helpers/basic";

const API_TIMEOUT = 180000;

const API_HEADERS = {
  "Content-Type": "application/json",
  "Content-Type": "multipart/form-data",
};

const api = axios.create({
  baseURL: conf.REACT_APP_API_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS,
});

api.interceptors.request.use(
  (config) => {
    const auxConfig = { ...config };
    auxConfig.headers.authorization = `${getAccessToken()}`;
    return auxConfig;
  },
  (err) => Promise.reject(err)
);

const resolvePatch = async (...args) => {
  try {
    const response = await api.patch(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};

const resolvePut = async (...args) => {
  try {
    const response = await api.put(...args);
    console.log(response, "response");
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    console.log(error);
    if (error) {
      if (_.has(error, "response.data")) {
        return error.response.data;
      } else if (_.has(error, "error.message")) {
        return error.error.message;
      }
    }

    return null;
  }
};

const resolvePost = async (...args) => {
  try {
    const response = await api.post(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    console.log(error);
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};

const resolveGet = async (...args) => {
  try {
    const response = await api.get(...args);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    if (_.has(error, "response.data")) {
      return error.response.data;
    }
    return null;
  }
};

export const userApi = {
  login: (data = {}) => resolvePost(endPoints.login, data),
  signup: (data = {}) => resolvePost(endPoints.signup, data),
  profile: () => resolveGet(endPoints.profile),
};
