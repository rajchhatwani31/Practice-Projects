import {  put, takeLatest ,call} from "redux-saga/effects";
import { generateUserAction } from "./Actions/actions";
import { getApi } from "../api";

function* featchFromAPI(action) {
    // debugger
  let response = yield call(getApi,action.payload)
//   debugger

  if(response.status ===200){
    yield put(generateUserAction(response.data.data));

  }

}

export function* watchSaga() {
  yield takeLatest("GET_DATA" ,featchFromAPI);
}
