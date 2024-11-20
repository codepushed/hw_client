import { adminApi, professionalApi, userApi } from "../client";

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

export const adminGetAllProfessionals = async (data) => {
  return adminApi.getAllProfessionals(data);
};

export const adminProfessionalAdhaarVerification = async (data) => {
  return adminApi.adhaarVerification(data);
};

export const createBooking = async (data) => {
  return userApi.createBookings(data);
};

export const getAllBookings = async (data) => {
  return userApi.getAllBookings(data);
};

export const professionalSignUp = async (data) => {
  return professionalApi.signUp(data);
};

export const userGetAllProfessionals = async (data) => {
  return userApi.getAllProfessionals(data);
};

export const getProfessionalsByProfession = async (data) => {
  return userApi.getAllProfessionalsByProfession(data);
};

export const sentBookingDetails = async (data) => {
  return userApi.sentBookingDetails(data);
};

export const adminLogin = async (data) => {
  return adminApi.adminLogin(data);
};

export const updateProfessionalDetails = async (data) => {
  return professionalApi.updateProfessionalDetails(data);
};

export const upload = async (data) => {
  return userApi.upload(data);
};
