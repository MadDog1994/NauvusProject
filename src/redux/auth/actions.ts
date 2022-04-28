import * as types from "../types";

export const sendPhoneNumber = (phoneNumber: any) => {
  return { type: types.SEND_PHONE_NUMBER, payload: phoneNumber };
};

export const sendVerifyCode = (data: any) => {
  return { type: types.SEND_VERIFY_CODE, payload: data };
};

export const sendLoginData = (email: string, password: string) => {
  return { type: types.SEND_LOGIN_DATA, email, password };
};

export const sendCarrierData = (data: any) => {
  return {
    type: types.SEND_CARRIER_DATA,
    payload: data,
  };
};
