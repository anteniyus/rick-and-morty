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
    }),
    () => ({
      data: [],
      total: 0,
      params,
    })
  ),
});

export const getSingleLocation = (id, params) => ({
  type: ActionTypes.GET_SINGLE_LOCATION,
  payload: api.GetSingleLocation(id, params).then(
    (response) => ({
      data: response.data,
    }),
    () => ({
      data: [],
    })
  ),
});
