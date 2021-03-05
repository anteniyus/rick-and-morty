import React, { Component } from "react";
import PropTypes from "prop-types";

import RestApi from "../../../rest/RestApi";

class CharacterProfile extends Component {
  constructor(props) {
    super(props);

    this.api = new RestApi();

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.api
      .GetSingleCharacter(id)
      .then((response) => this.setState({ data: response.data }));
  }

  render() {
    const { data } = this.state;
    return <>{data.name}</>;
  }
}

CharacterProfile.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CharacterProfile;
