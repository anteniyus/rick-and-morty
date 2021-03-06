import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import CharacterCard from "./profile/CharacterCard";
import { isEmptyObject, notNullArray } from "../../utils/Validator";

import PaginationConnector from "../../dataStore/PaginationConnector";
import { PaginationControls } from "../../PaginationControl";

const Pagination = PaginationConnector(PaginationControls);

// eslint-disable-next-line react/prefer-stateless-function
class CharactersCardList extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <Grid container spacing={2}>
          {!isEmptyObject(data) &&
            notNullArray(data.results) &&
            data.results.map((characterData) => (
              <CharacterCard data={characterData} key={characterData.id} />
            ))}
        </Grid>

        <Grid item lg={12}>
          <Pagination />
        </Grid>
      </>
    );
  }
}

CharactersCardList.defaultProps = {
  data: [],
};

CharactersCardList.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default CharactersCardList;
