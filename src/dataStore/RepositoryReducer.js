import ActionTypes from "./Types";

const RepositoryReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHARACTERS:
      return {
        ...storeData,
        data: action.payload.data,
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
