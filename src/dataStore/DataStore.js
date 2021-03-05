import { createStore, applyMiddleware } from "redux";
import RepositoryReducer from "./RepositoryReducer";
import asyncActions from "./AsyncMiddleware";

const RickAndMortyStore = createStore(
  RepositoryReducer,
  applyMiddleware(asyncActions)
);

export default RickAndMortyStore;
