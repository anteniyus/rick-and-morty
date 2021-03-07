import React, { Component } from "react";
import PropTypes from "prop-types";

class DataGetter extends Component {
  componentDidMount = () => this.getData();

  componentDidUpdate = () => this.getData();

  /*
   * get parameters from url and compares them with those
   * in data store that were added after the last request
   * */
  getData = () => {
    const { params, match, getCharacters, setLoading } = this.props;
    const dsData = params;

    const rtData = {
      page: match.params.page || 1,
    };

    if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
      setLoading(true);
      getCharacters(rtData);
    }
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
  setLoading: PropTypes.func.isRequired,
};

export default DataGetter;
