import { ActionTypes } from '../constants/actiontypes';

export const pokemonReducers = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SET_FETCH_POKEMON:
            // Logic for SET_FETCH_POKEMON
            console.warn("SET_FETCH_POKEMON Reducers", action.data?.results);
            return [...state, action.data]
        default:
            return state;
    }
};
