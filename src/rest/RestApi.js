import Axios from "axios";

import GetCharactersListUrl from "./Urls";

class RestApi {
  GetCharactersList = async (username, params) =>
    this.SendRequest("get", GetCharactersListUrl(), params);

  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}

export default RestApi;
