import {combineReducers} from 'redux'
import { cartReducers } from './cartReducers';
import { themeReducers } from './themeReducers';
import { loading } from './loading';
import { languageReducer } from './languageReducer';
import { productReducers } from './productListReducers';
import { userReducers } from './userReducers';
import { pokemonDataReducer } from './pokemonDataReducer';
import { registerReducer } from './registerReducer';
import { loginReducers } from './loginReducers';

export default combineReducers({
    cartReducers: cartReducers,
    themeReducers:themeReducers,
    loading:loading,
    language:languageReducer,
    productReducers:productReducers,
    userReducers:userReducers,
    pokemonDataReducer:pokemonDataReducer,
    registerReducer:registerReducer,
    loginReducers:loginReducers
})