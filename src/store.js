import { createStore, applyMiddleware, compose } from "redux";
import { promiseMiddleware } from "./middleware";

import reducer from "./reducers";
//import reducer from "./reducers/index"

//conditional check for PROD rather than dev
const composeDebug = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeDebug(applyMiddleware(promiseMiddleware)));
