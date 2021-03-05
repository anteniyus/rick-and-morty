import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

import Connector from "../../dataStore/Connector";
import CharactersProfilesList from "../character/CharactersProfilesList";

const Home = (props) => {
  const { data, getCharacters } = props;

  return (
    <Box p={5}>
      <CharactersProfilesList getCharacters={getCharacters} data={data} />
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
