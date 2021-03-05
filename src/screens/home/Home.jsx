import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Box from "@material-ui/core/Box";

import Connector from "../../dataStore/Connector";
import CharactersProfilesList from "../character/CharactersProfilesList";

import CharacterProfile from "../character/profile/CharacterProfile";

const Home = (props) => {
  const { data, getCharacters } = props;

  return (
    <Box p={5}>
      <Router>
        <Switch>
          <Route
            path="/character"
            render={() => (
              <CharactersProfilesList
                getCharacters={getCharacters}
                data={data}
              />
            )}
            exact
          />

          <Route
            exact
            path="/character/:id"
            render={(routerProps) => (
              <CharacterProfile
                id={parseInt(routerProps.match.params.id, 10)}
              />
            )}
          />

          <Redirect to="/character" />
        </Switch>
      </Router>
    </Box>
  );
};

Home.defaultProps = {
  data: [],
};

Home.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object),
};

export default Connector(Home);
