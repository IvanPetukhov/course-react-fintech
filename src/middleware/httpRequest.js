export default store => next => action => {
  if (action.type === 'API_REQUEST') {
    return fetch(action.request.API + action.request.query, { method: action.request.method })
      .then((resp) => (resp.json()))
      .then((data) => (store.dispatch({
          payload: data,
          type: action.call.success
        })
      ))
      .catch(_ => store.dispatch({
          type: action.call.fail
        })
      );
  }
  return next(action);
};