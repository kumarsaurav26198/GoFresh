import { ActionTypes } from "../constants/actiontypes";

export const pokemonData =  () => {
    console.warn(" pokemonData action is called",)
    return {
        type: ActionTypes.FETCH_POKEMON
    }
}
