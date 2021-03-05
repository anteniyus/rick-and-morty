import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import RickAndMortyStore from "./dataStore/DataStore";
import Home from "./screens/home/Home";

function App() {
  return (
    <Provider store={RickAndMortyStore}>
      <Router>
        <Switch>
          <Route path="/character" component={Home} />
          <Redirect from="/" to="/character" exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
