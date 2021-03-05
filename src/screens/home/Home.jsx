import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CharactersProfilesList from "../character/CharactersProfilesList";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharactersProfilesList />
    </div>
  );
};

export default Home;
