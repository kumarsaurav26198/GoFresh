import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';
import { fetchPokemonFailure, fetchPokemonSuccess } from '../action/pokemonDataAction';

function* fetchPokemon(action) {
  try {
    const res = yield call(axios.get, action.payload);
    yield put(fetchPokemonSuccess(res.data.results));
  } catch (error) {
    yield put(fetchPokemonFailure(error.message));
  }
}

function* pokemonSaga() {
  yield takeLatest(ActionTypes.FETCH_POKEMON_REQUEST, fetchPokemon);
}

export default pokemonSaga;
