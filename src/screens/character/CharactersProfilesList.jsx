import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import CharacterCard from "./profile/CharacterCard";
import { isEmptyObject, notNullArray } from "../../utils/Validator";

// eslint-disable-next-line react/prefer-stateless-function
class CharactersProfilesList extends Component {
  componentDidMount() {
    const { getCharacters } = this.props;
    getCharacters();
  }

  render() {
    const { data } = this.props;

    return (
      <Grid container spacing={2}>
        {!isEmptyObject(data) &&
          notNullArray(data.results) &&
          data.results.map((characterData) => (
            <CharacterCard
              id={characterData.id}
              name={characterData.name}
              status={characterData.status}
              species={characterData.species}
              locationName={characterData.location.name}
              image={characterData.image}
              key={characterData.id}
            />
          ))}
      </Grid>
    );
  }
}

CharactersProfilesList.defaultProps = {
  data: [],
};

CharactersProfilesList.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object),
};

export default CharactersProfilesList;
