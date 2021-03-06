import React, { Component } from "react";
import PropTypes from "prop-types";

class DataGetter extends Component {
  componentDidMount = () => this.getData();

  componentDidUpdate = () => this.getData();

  getData = () => {
    const { params, match, getCharacters } = this.props;
    const dsData = params;

    const rtData = {
      page: match.params.page || 1,
    };

    if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key]))
      getCharacters(rtData.page, rtData);
  };

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

DataGetter.defaultProps = {
  params: {},
};

DataGetter.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  params: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  getCharacters: PropTypes.func.isRequired,
};

export default DataGetter;
