import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/rootReducer";
import productSaga from './saga/productSaga';
import userSaga from "./saga/userSaga";
import pokemonSaga from "./saga/pokemonSaga";

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(productSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(pokemonSaga);
export default store;