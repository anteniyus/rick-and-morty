import React, { Component } from "react";
import PropTypes from "prop-types";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import RestApi from "../../../rest/RestApi";
import Connector from "../../../dataStore/Connector";
import { isEmptyObject } from "../../../utils/Validator";

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
    return (
      <>
        {!isEmptyObject(data) && (
          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(158, 158, 158)",
              }}
            >
              Location Name:
            </Typography>
            <Typography
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
              gutterBottom
            >
              {data.name}
            </Typography>

            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(158, 158, 158)",
              }}
            >
              Location Type:
            </Typography>
            <Typography
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
              gutterBottom
            >
              {data.type}
            </Typography>

            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(158, 158, 158)",
              }}
            >
              Location Dimension:
            </Typography>
            <Typography
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
              gutterBottom
            >
              {data.dimension}
            </Typography>

            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "rgb(158, 158, 158)",
              }}
            >
              Amount of Residents:
            </Typography>
            <Typography
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {data.residents.length}
            </Typography>
          </CardContent>
        )}
      </>
    );
  }
}

CharacterLocationInfo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Connector(CharacterLocationInfo);
