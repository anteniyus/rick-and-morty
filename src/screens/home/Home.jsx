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
import CharactersCardList from "../character/CharactersCardList";

import CharacterProfile from "../character/profile/CharacterProfile";
import DataGetter from "../../dataStore/DataGetter";

const Home = (props) => {
  const { data, getCharacters } = props;

  return (
    <Box p={5}>
      <Router>
        <Switch>
          <Redirect from="/character" to="/character/1" exact />

          <Route
            path="/character/:page"
            render={(routerProps) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <DataGetter {...props} {...routerProps}>
                <CharactersCardList
                  getCharacters={getCharacters}
                  data={data}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...props}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...routerProps}
                />
              </DataGetter>
            )}
            exact
          />

          <Route
            exact
            path="/character/profile/:id"
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
