import { call, put, take, delay, select } from 'redux-saga/effects'
// call: promise 완료까지 기다림
// put: action dispatch
// take: action발생을 기다림

const fetchData = async () => {
  try {
      const res = await fetch("http://localhost:5000/api/tasks")
      const data = await res.json();
      return data;
  }
  catch (err) {
    throw new Error('API request failed')
  }
}

const fetchWrongData = async () => {
  try {
      const res = await fetch("http://localhost:5000/api/taskss")
      const data = await res.json();
      return data;
  }
  catch (err) {
    throw new Error('API request failed')
  }
}

function* getTaskApi() {
    for (let i = 0; i < 5; i++) {
      try {
        console.log( i+ "번째 시도!");
        const apiResponse = yield call(fetchData);
        yield put({
          type: 'tasks/setDataThroughSaga',
          payload: apiResponse,
        })
        return;
        // return apiResponse;
      } catch (err) {
        console.log("error로 잡혔다!!!", err)
        if (i < 4) {
          yield delay(500)
        }
      }
    }
  // attempts failed after 5 attempts
    yield put({
      type: 'tasks/apiErrorThroughSaga',
      payload:'API request failed',
    })
  // throw new Error('API request failed')
}

// function* getTaskWrongApi() {
//   for (let i = 0; i < 5; i++) {
//     try {
//       console.log( i+ "번째 시도!");
//       const apiResponse = yield call(fetchWrongData);
//       return apiResponse;
//     } catch (err) {
//       console.log("error로 잡혔다!!!", err)
//       if (i < 4) {
//         yield delay(500)
//       }
//     }
//   }
// // attempts failed after 5 attempts
// throw new Error('API request failed after 5 attempts');
// }

export default function* watchGetTask() {
    console.log("watch getTask api");
    while (true) {
      yield take('tasks/startGetDataThroughSaga');
      const curNum = yield select((state)=>state.taskReducer.sentence_num);
      for (let i = 0; i < curNum; i++) {
        yield call(getTaskApi);
        }
      }
}