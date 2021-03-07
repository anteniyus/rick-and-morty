import ActionTypes from "./Types";

const Reducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHARACTERS:
      return {
        ...storeData,
        data: action.payload.data,
        total: action.payload.total,
        params: action.payload.params,
        isLoading: action.payload.isLoading,
      };

    case ActionTypes.SET_LOADING:
      return {
        ...storeData,
        isLoading: action.payload.isLoading,
      };

    default:
      return storeData || {};
  }
};

export default Reducer;
