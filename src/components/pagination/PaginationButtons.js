import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

const PaginationButtons = (props) => {
  const { currentPage, pageCount, navigateToPage } = props;

  return (
    <Box mt={5} display="flex" justifyContent="center">
      <Pagination
        count={pageCount}
        color="secondary"
        page={currentPage}
        onChange={(event, val) => navigateToPage(val)}
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  navigateToPage: PropTypes.func.isRequired,
};

export default PaginationButtons;
