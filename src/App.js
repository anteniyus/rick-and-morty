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
import CharacterProfileMain from "./screens/character/profile/CharacterProfileMain";

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
              <CharacterProfileMain id={routerProps.match.params.id} />
            )}
          />

          <Redirect to="/character" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
