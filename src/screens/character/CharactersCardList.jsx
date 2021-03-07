import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import CharacterCard from "./profile/CharacterCard";
import { isEmptyObject, notNullArray } from "../../utils/Validator";
import PaginationConnector from "../../dataStore/PaginationConnector";
import PaginationButtons from "../../components/pagination/PaginationButtons";

const Pagination = PaginationConnector(PaginationButtons);

const CharactersCardList = (props) => {
  const { data, isLoading } = props;

  function createUI() {
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

  return (
    <>
      {isLoading ? (
        <Skeleton animation="wave" width="100%" height="100%" />
      ) : (
        createUI()
      )}
    </>
  );
};

CharactersCardList.defaultProps = {
  data: [],
  isLoading: false,
};

CharactersCardList.propTypes = {
  data: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
};

export default CharactersCardList;
