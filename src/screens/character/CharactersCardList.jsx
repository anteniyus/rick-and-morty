import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import CharacterCard from "./profile/CharacterCard";
import { isEmptyObject, notNullArray } from "../../utils/Validator";

class CharactersCardList extends Component {
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
            <CharacterCard data={characterData} key={characterData.id} />
          ))}
      </Grid>
    );
  }
}

CharactersCardList.defaultProps = {
  data: [],
};

CharactersCardList.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object),
};

export default CharactersCardList;
