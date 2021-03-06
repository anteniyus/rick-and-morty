import React, { Component } from "react";
import { PaginationButtons } from "./PaginationButtons";

/*eslint-disable */
export class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [5, 10, 25, 100];
  }

  handlePageSizeChange = (ev) => {
    this.props.setPageSize(ev.target.value);
  };

  render() {
    return (
      <div className="m-2">
        <div className="text-center m-1">
          <PaginationButtons
            currentPage={this.props.currentPage}
            pageCount={this.props.pageCount}
            navigate={this.props.navigateToPage}
          />
        </div>
      </div>
    );
  }
}
