import { all, fork } from "redux-saga/effects";
import watchGetTask from "./taskSagas"

const rootSaga = function* () {
  yield all([
    fork(watchGetTask),
    // Considering we have the watcher below
    // fork(watchGetUsersList),
  ]);
};

export default rootSaga;