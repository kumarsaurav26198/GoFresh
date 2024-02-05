import { all } from 'redux-saga/effects';
import pokemonSaga from './pokemonSaga';
import userSaga from './userSaga';
import productSaga from './productSaga';
import registerUserSaga from './registerUserSaga';
import loginUserSaga from './loginSaga';
import fetchQrProductsSaga from './fetchQrProductsSaga';

function* rootSaga() {
    yield all([
        pokemonSaga(),
        userSaga(),
        productSaga(),
        registerUserSaga(),
        loginUserSaga(),
        fetchQrProductsSaga()
    ]);
}
export default rootSaga;
