import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./collection.actions";
import { ShopActionTypes } from "./collection.types";
import {
  storage,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = storage.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
