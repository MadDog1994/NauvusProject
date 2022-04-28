import { ActionType } from "deox";
import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  sendPhoneNumber,
  sendVerifyCode,
  sendLoginData,
} from "../../services/api/authApi";

import * as types from "../types";

function* phoneNumberSagaWorker({ payload }: any): SagaIterator {
  try {
    const response = yield call(sendPhoneNumber, {
      phone: payload,
    });

    console.log(response, "response");
  } catch (error) {
    console.log("Send Phone Number Error: ", error);
  }
}

function* verifyCodeSagaWorker({ payload }: any): SagaIterator {
  try {
    const response = yield call(sendVerifyCode, payload);
    console.log(response, "codecode");
  } catch (error) {
    console.log("Send Verify Code Error: ", error);
  }
}

function* loginDataSagaWorker({ payload }: any): SagaIterator {
  try {
    const response = yield call(sendLoginData, {
      email: payload,
    });
    console.log(response.code, "codecode");
  } catch (error) {
    console.log("Send Verify Code Error: ", error);
  }
}

export default function* watcherAuthSaga() {
  yield takeEvery(types.SEND_PHONE_NUMBER, phoneNumberSagaWorker);
  yield takeEvery(types.SEND_VERIFY_CODE, verifyCodeSagaWorker);
  yield takeEvery(types.SEND_LOGIN_DATA, loginDataSagaWorker);
}
