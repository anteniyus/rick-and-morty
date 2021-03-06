import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import RestApi from "../../../rest/RestApi";
import Connector from "../../../dataStore/Connector";
import { isEmptyObject } from "../../../utils/Validator";

class CharacterLocationInfo extends Component {
  constructor(props) {
    super(props);

    this.api = new RestApi();
  }

  componentDidMount() {
    const { id, getSingleLocation } = this.props;
    getSingleLocation(id);
  }

  render() {
    const { data } = this.props;
    return (
      <Box p={5}>
        {!isEmptyObject(data) && (
          <Card>
            <CardContent>
              <Typography
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(158, 158, 158)",
                }}
              >
                Last known location:
              </Typography>
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {data.name}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    );
  }
}

CharacterLocationInfo.propTypes = {
  id: PropTypes.number.isRequired,
  getSingleLocation: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Connector(CharacterLocationInfo);
