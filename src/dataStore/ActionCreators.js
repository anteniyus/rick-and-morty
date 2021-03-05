import ActionTypes from "./Types";
import RestApi from "../rest/RestApi";

const api = new RestApi();

const getCharacters = (params) => ({
  type: ActionTypes.GET_CHARACTERS,
  payload: api.GetCharacters(params).then(
    (response) => ({
      data: response.data,
    }),
    () => ({
      data: [],
    })
  ),
});

export default getCharacters;
