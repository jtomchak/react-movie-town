const promiseMiddleware = store => next => action => {
  //are you a promise
  if (isPromise(action.payload)) {
    store.dispatch({ type: "ASYNC_START", subtype: action.type });
    action.payload
      .then(res => res.json())
      .then(payload => {
        action.payload = payload;
        store.dispatch(action);
      })
      .catch(error => {
        action.error = true;
        action.payload = error;
        store.dispatch(action);
      });
    return;
  }
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === "function";
}

export { promiseMiddleware };
