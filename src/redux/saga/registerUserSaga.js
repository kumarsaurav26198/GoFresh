import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { registerFailure, registerSuccess } from '../action/authActions';

function* registerUser({ payload }) {
  try {
    const { email, password, name } = payload; 
    const userCredential = yield auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    yield userCredential.user.updateProfile({
      displayName: name
    });
    yield database().ref('users/' + userCredential.user.uid).set({
      email: email,
      displayName: name,
      password: password
    });

    yield put(registerSuccess(userCredential));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

function* registerUserSaga() {
  yield takeEvery(ActionTypes.REGISTER_USER, registerUser);
}

export default registerUserSaga;
