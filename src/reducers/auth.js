const auth = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.user ? true : false,
        errors: action.error ? action.payload.errors : null,
        inProgress: false
      };
    default:
      return state;
  }
};

export default auth;
