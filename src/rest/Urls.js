const protocol = "https";
const hostname = "rickandmortyapi.com";
const subdirectory = "api";
const characterPath = "character";

const GetCharactersListUrl = () =>
  `${protocol}://${hostname}/${subdirectory}/${characterPath}`;

export default GetCharactersListUrl;
