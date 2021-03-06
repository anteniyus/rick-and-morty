import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import asyncActions from "./AsyncMiddleware";

const RickAndMortyStore = createStore(Reducer, applyMiddleware(asyncActions));

export default RickAndMortyStore;
