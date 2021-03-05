import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Connector from "../../dataStore/Connector";
import CharactersProfilesList from "../character/CharactersProfilesList";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Home = (props) => {
  const classes = useStyles();

  const { data, getCharacters } = props;

  return (
    <div className={classes.root}>
      <CharactersProfilesList getCharacters={getCharacters} data={data} />
    </div>
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
