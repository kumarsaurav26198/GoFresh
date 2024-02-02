import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';
import auth from '@react-native-firebase/auth';
import { loginFailure, loginSuccess } from '../action/authActions';

function* loginUser({ payload }) {
  const { email, password } = payload;
  try
  {
    yield auth().signInWithEmailAndPassword(email, password);
    const currentUser = yield auth().currentUser;
    console.log("currentUser====>", currentUser);
    // Dispatch the loginSuccess action with the current user object
    // yield put(loginSuccess(currentUser));
    yield put({ type: ActionTypes.LOGIN_REQUEST_SUCCESS, currentUser });

  }
  catch (error)
  {
    yield put(loginFailure(error));
  }

}

function* loginUserSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginUser);
}

export default loginUserSaga;
