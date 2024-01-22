import { all } from 'redux-saga/effects';
import pokemonSaga from './pokemonSaga';
import userSaga from './userSaga';
import productSaga from './productSaga';

function* rootSaga() {
    yield all([
        pokemonSaga(),
        userSaga(),
        productSaga(),
    ]);
}
export default rootSaga;
