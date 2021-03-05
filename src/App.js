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
import CharacterProfile from "./screens/character/profile/CharacterProfile";

function App() {
  return (
    <Provider store={RickAndMortyStore}>
      <Router>
        <Switch>
          <Route path="/character" component={Home} exact />

          <Route
            exact
            path="/character/:id"
            render={(routerProps) => (
              <CharacterProfile id={routerProps.match.params.id} />
            )}
          />

          <Redirect to="/character" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
