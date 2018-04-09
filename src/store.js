import { createStore } from "redux";

const initalState = {
  movies: [],
  searchTerm: ""
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "NEW_MOVIES":
      return {
        ...state,
        movies: action.payload
      };
    case "CREATE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };

    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
