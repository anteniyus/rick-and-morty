const protocol = "https";
const hostname = "rickandmortyapi.com";
const subdirectory = "api";
const characterPath = "character";

const GetCharactersUrl = () =>
  `${protocol}://${hostname}/${subdirectory}/${characterPath}`;

export default GetCharactersUrl;
