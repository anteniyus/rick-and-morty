import React from "react";
import { Provider } from "react-redux";

import RickAndMortyStore from "./dataStore/DataStore";
import Home from "./screens/home/Home";

import "./assets/css/general.css";

function App() {
  return (
    <Provider store={RickAndMortyStore}>
      <Home />
    </Provider>
  );
}

export default App;
