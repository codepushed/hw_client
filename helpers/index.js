import { userApi } from "../client";

export const login = async (data) => {
  return userApi.login(data);
};
