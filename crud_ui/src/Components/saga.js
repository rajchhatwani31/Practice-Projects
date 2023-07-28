import { put, takeLatest, call, select } from "redux-saga/effects";
import {
  generateUserAction,
  updateUserAction,
  addedUser,
  removedData,
} from "./Actions/actions";
import { getApi, updateUser, addUser, deleteUser } from "../api";

function* featchFromAPI(action) {
  let response = yield call(getApi, action.payload);

  if (response.status === 200) {
    yield put(generateUserAction(response.data.data));
  }
}
function* updateDataToAPI(action) {
  const state = yield select();

  let response = yield call(updateUser, action.payload);

  if (response.status === 200) {
    let updatedData = state.getUser.userList.map((data) => {
      if (response.data.data._id === data._id) {
        return response.data.data;
      } else {
        return data;
      }
    });
    yield put(updateUserAction(updatedData));
  }
}
function* addingUser(action) {
  let response = yield call(addUser, action.payload);
  yield put(addedUser(response.data.data));
}

function* deleteUserData(action) {
  let response = yield call(deleteUser, action.payload);
  if (response.status === 200) {
    yield put(removedData(action.payload));
  }
}
export function* watchSaga() {
  yield takeLatest("GET_DATA", featchFromAPI);
  yield takeLatest("UPDATE_USER", updateDataToAPI);
  yield takeLatest("ADD_USER", addingUser);
  yield takeLatest("DELETE_USER", deleteUserData);
}
