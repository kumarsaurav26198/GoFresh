import { all } from 'redux-saga/effects';
import pokemonSaga from './pokemonSaga';
import userSaga from './userSaga';
import productSaga from './productSaga';
import registerUserSaga from './registerUserSaga';
import loginUserSaga from './loginSaga';

function* rootSaga() {
    yield all([
        pokemonSaga(),
        userSaga(),
        productSaga(),
        registerUserSaga(),
        loginUserSaga()
    ]);
}
export default rootSaga;
