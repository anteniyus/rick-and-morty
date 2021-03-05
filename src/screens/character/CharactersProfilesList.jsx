import React from "react";

import Grid from "@material-ui/core/Grid";

import CharacterProfile from "./CharacterProfile";

const CharactersProfilesList = () => (
  <Grid container spacing={2}>
    <CharacterProfile />
    <CharacterProfile />
    <CharacterProfile />
    <CharacterProfile />
  </Grid>
);

export default CharactersProfilesList;
