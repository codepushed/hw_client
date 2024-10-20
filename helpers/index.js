import { userApi } from "../client";

export const login = async (data) => {
  return userApi.login(data);
};

export const signup = async (data) => {
  return userApi.signup(data);
};

export const profile = async () => {
  return userApi.profile();
};

export const profileUpdate = async (data) => {
  return userApi.profileUpdate(data);
};
