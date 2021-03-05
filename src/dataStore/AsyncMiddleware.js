const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

const asyncActions = () => (next) => (action) => {
  if (isPromise(action.payload))
    action.payload.then((result) => next({ ...action, payload: result }));
  else next(action);
};

export default asyncActions;
