import ActionTypes from "./Types";

const Reducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHARACTERS:
      return {
        ...storeData,
        data: action.payload.data,
        total: action.payload.total,
        params: action.payload.params,
      };

    case ActionTypes.GET_SINGLE_LOCATION:
      return {
        ...storeData,
        data: action.payload.data,
      };

    default:
      return storeData || {};
  }
};

export default Reducer;
