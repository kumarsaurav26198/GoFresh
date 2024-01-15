// userSaga.js
import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';

function* getUsers() {
  try {
    let data = yield fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!data.ok) {
      throw new Error(`Failed to fetch user data: ${data.status}`);
    }
    data = yield data.json();
    console.warn('getUsers Api is called', data);
    yield put({ type: ActionTypes.SET_USER_LIST, data });
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle the error as needed.
  }
}

function* userSaga() {
  yield takeEvery(ActionTypes.USER_LIST, getUsers);
}

export default userSaga;
