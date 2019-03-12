import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";
import { forbiddenWordsMiddleware } from "./../middleware/index.js";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware, thunk)
    // storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;