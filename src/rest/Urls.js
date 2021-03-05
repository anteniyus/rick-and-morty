const protocol = "https";
const hostname = "rickandmortyapi.com";
const subdirectory = "api";
const characterPath = "character";

export const GetCharactersUrl = () =>
  `${protocol}://${hostname}/${subdirectory}/${characterPath}`;

export const GetSingleCharactersUrl = (id) =>
  `${protocol}://${hostname}/${subdirectory}/${characterPath}/${id}`;
