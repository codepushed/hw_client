import { userApi } from "../client";

export const login = async (data) => {
  return userApi.login(data);
};

export const signup = async (data) => {
  return userApi.signup(data);
};
