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

export const getAllServices = async (data) => {
  return userApi.allServices(data);
};

export const getServiceById = async (data) => {
  return userApi.serviceById(data);
};

export const addNewAddress = async (data) => {
  return userApi.address(data);
};

export const getAddress = async (data) => {
  return userApi.getAddress(data);
};
