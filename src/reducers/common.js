const initalState = {
  movies: [],
  searchTerm: "",
  isAuthenticated: false,
  currentUser: null
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
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
        isAuthenticated: action.payload.user ? true : false,
        inProgress: false
      };
    case "REDIRECT":
      return { ...state, redirectTo: null };

    default:
      return state;
  }
};

export default common;
