// fetchQrProductsSaga


import { takeEvery, put ,call} from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';
import { fetchQRProductsFailure, fetchQRProductsSuccess } from '../action/qrAction';
import axios from 'axios';

function* fetchQrProducts({  }) {
    try {
        const response = yield call(axios.post, 'http://44.200.180.0:7777/api/v1/auth/reactnativetest');
        yield put(fetchQRProductsSuccess(response.data.data));
      } catch (error) {
        yield put(fetchQRProductsFailure(error));
      }
    
}

function* fetchQrProductsSaga() {
  yield takeEvery(ActionTypes.FETCH_QR_REQUEST, fetchQrProducts);
}

export default fetchQrProductsSaga;
