const protocol = "https";
const hostname = "rickandmortyapi.com";
const subdirectory = "api";
const characterPath = "character";
const locationPath = "location";

export const GetCharactersUrl = (page) =>
  `${protocol}://${hostname}/${subdirectory}/${characterPath}/?page=${page}`;

export const GetSingleCharactersUrl = (id) =>
  `${protocol}://${hostname}/${subdirectory}/${characterPath}/${id}`;

export const GetSingleLocationUrl = (id) =>
  `${protocol}://${hostname}/${subdirectory}/${locationPath}/${id}`;
