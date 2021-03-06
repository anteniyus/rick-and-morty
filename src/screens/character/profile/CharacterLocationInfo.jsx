import React, { Component } from "react";
import PropTypes from "prop-types";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import RestApi from "../../../rest/RestApi";
import { isEmptyObject, notNullArray } from "../../../utils/Validator";

class CharacterLocationInfo extends Component {
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
      .GetSingleLocation(id)
      .then((response) => this.setState({ data: response.data }));
  }

  render() {
    const { data } = this.state;
    const { name } = this.props;

    return (
      <>
        <CardContent>
          <Typography className="title">Location Name:</Typography>
          <Typography className="text" gutterBottom>
            {name || data.name}
          </Typography>

          {!isEmptyObject(data) && (
            <>
              <Typography className="title">Location Type:</Typography>
              <Typography className="text" gutterBottom>
                {data.type}
              </Typography>

              <Typography className="title">Location Dimension:</Typography>
              <Typography className="text" gutterBottom>
                {data.dimension}
              </Typography>

              <Typography className="title">Amount of Residents:</Typography>
              <Typography className="text">
                {notNullArray(data.residents) ? data.residents.length : 0}
              </Typography>
            </>
          )}
        </CardContent>
      </>
    );
  }
}

CharacterLocationInfo.defaultProps = {
  name: "",
};

CharacterLocationInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
};

export default CharacterLocationInfo;
