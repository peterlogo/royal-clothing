import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./collection/collection.saga";
import { userSaga } from "./user/user-saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSaga)]);
}
