import Axios from "axios";

import GetCharactersUrl from "./Urls";

class RestApi {
  GetCharacters = async (username, params) =>
    this.SendRequest("get", GetCharactersUrl(), params);

  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}

export default RestApi;
