import axios from "axios";
import { BASE_URL } from "../../config/API";

export function sendPhoneNumber(phoneNumber: any) {
  let config = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods":
        "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  return axios.post(
    `${BASE_URL}/web/sign_up/verify_phone_number`,
    {
      body: phoneNumber,
    },
    config
  );
}

export function sendVerifyCode(verifyCode: any) {
  let config = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods":
        "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  return axios.post(
    `${BASE_URL}/web/sign_up/check_code_phone_number`,
    {
      body: verifyCode,
    },
    config
  );
}

export function sendLoginData(email: any) {
  let config = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods":
        "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  return axios.post(
    `${BASE_URL}/web/account/login`,
    {
      body: email,
    },
    config
  );
}
