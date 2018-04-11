const initalState = {
  movies: [],
  searchTerm: "",
  isAuthenticated: false,
  user: null
};

export const common = (state = initalState, action) => {
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
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.user ? true : false,
        inProgress: false
      };

    default:
      return state;
  }
};

export default common;
