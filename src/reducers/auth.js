const auth = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        ...state,
        isAuthenticated: action.payload.user ? true : false,
        inProgress: false
      };
    default:
      return state;
  }
};

export default auth;
