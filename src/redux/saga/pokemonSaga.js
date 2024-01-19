import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';

async function fetchPokemons() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  return response.json();
}

function* getPokemons() {
  try {
    const data = yield fetchPokemons();
    console.warn('getPokemons saga Api is called', data);
    yield put({ type: ActionTypes.SET_FETCH_POKEMON, data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
function* pokemonSaga() {
  yield takeEvery(ActionTypes.FETCH_POKEMON, getPokemons);
}

export default pokemonSaga;
