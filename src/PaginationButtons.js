import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";

/*eslint-disable */
export class PaginationButtons extends Component {
  render() {
    const current = this.props.currentPage;
    const pageCount = this.props.pageCount;
    const navigate = this.props.navigate;
    return (
      <Pagination
        count={pageCount}
        color="secondary"
        page={current}
        onChange={(event, val) => navigate(val)}
      />
    );
  }
}
