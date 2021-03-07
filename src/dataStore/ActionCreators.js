import ActionTypes from "./Types";
import RestApi from "../rest/RestApi";

const api = new RestApi();

export const getCharacters = (params) => ({
  type: ActionTypes.GET_CHARACTERS,
  payload: api.GetCharacters(params).then(
    (response) => ({
      data: response.data,
      total: response.data.info.count,
      params,
      isLoading: false,
    }),
    () => ({
      data: [],
      total: 0,
      params,
      isLoading: false,
    })
  ),
});

export const setLoading = (isLoading) => ({
  type: ActionTypes.SET_LOADING,
  payload: {
    isLoading,
  },
});
