import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "@redux-saga/core/effects";
import * as types from "./actiontTypes";
import { getSliderDataError, getSliderDataSuccess } from "./actions";
import { DataGetSliderApi } from "./api";

// ===============================================================================

function* onGetSliderDataStartAsync() {
  try {
    const response = yield call(DataGetSliderApi);

    if (response.status === 200) {
      yield put(getSliderDataSuccess(response.data));
    }
  } catch (error) {
    yield put(getSliderDataError(error.response.data));
  }
}
// ===============================================================================
function* onGestSliderData() {
  yield takeEvery(types.GET_SLIDER_DATA_START, onGetSliderDataStartAsync);
}
// ===============================================================================
const userSagas = [fork(onGestSliderData)];
// ===============================================================================
export default function* rootSaga() {
  yield all([...userSagas]);
}
