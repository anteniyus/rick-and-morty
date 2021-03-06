import ActionTypes from "./Types";

const RepositoryReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHARACTERS:
      return {
        ...storeData,
        data: action.payload.data,
        total: action.payload.total,
        params: action.payload.params,
      };

    case ActionTypes.DATA_SET_PAGESIZE:
      return {
        ...storeData,
        pageSize: action.payload,
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

export default RepositoryReducer;
