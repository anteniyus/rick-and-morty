import Axios from "axios";

import {
  GetCharactersUrl,
  GetSingleCharactersUrl,
  GetSingleLocationUrl,
} from "./Urls";

class RestApi {
  GetCharacters = async (params) =>
    this.SendRequest("get", GetCharactersUrl(), params);

  GetSingleCharacter = async (id, params) =>
    this.SendRequest("get", GetSingleCharactersUrl(id), params);

  GetSingleLocation = async (id, params) =>
    this.SendRequest("get", GetSingleLocationUrl(id), params);

  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}

export default RestApi;
