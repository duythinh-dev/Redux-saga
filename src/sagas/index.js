import { put, takeLatest, all } from "redux-saga/effects";
function* fetchNews() {
  const json = yield fetch(
    "https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketAll"
  ).then((response) => response.json());
  console.log("file json", json);
  yield put({ type: "NEWS_RECEIVED", json: json });
}
function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
