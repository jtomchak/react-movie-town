import { createStore, applyMiddleware, compose } from "redux";
import { promiseMiddleware } from "./middleware";

const initalState = {
  movies: [],
  searchTerm: ""
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "NEW_MOVIES":
      return {
        ...state,
        movies: action.payload.results.filter(m => m.poster_path),
        inProgress: false
      };
    case "CREATE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
    case "ASYNC_START":
      return {
        ...state,
        inProgress: true
      };

    default:
      return state;
  }
};

const composeDebug = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeDebug(applyMiddleware(promiseMiddleware)));
