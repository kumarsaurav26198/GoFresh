import { ActionTypes } from '../constants/actiontypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const pokemonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case ActionTypes.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};