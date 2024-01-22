import { ActionTypes } from "../constants/actiontypes";

export const fetchPokemonRequest = (url) => ({
    type: ActionTypes.FETCH_POKEMON_REQUEST,
    payload: url,
  });
  
  export const fetchPokemonSuccess = (data) => ({
    type: ActionTypes.FETCH_POKEMON_SUCCESS,
    payload: data,
  });
  
  export const fetchPokemonFailure = (error) => ({
    type: ActionTypes.FETCH_POKEMON_FAILURE,
    payload: error,
  });
