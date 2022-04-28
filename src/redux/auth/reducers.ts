import { AnyAction } from "redux";
import * as types from "../types";

const initialState = {
  phoneNumber: "",
};

export const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SEND_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};
