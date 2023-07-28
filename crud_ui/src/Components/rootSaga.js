import { all } from "redux-saga/effects";
import { watchSaga } from "./saga";

export default function* rootSaga(){
    yield all([watchSaga()])
}