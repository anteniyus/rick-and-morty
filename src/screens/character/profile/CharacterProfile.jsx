import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import RestApi from "../../../rest/RestApi";

import CharacterCardMedia from "./CharacterCardMedia";
import CharacterCardContent from "./CharacterCardContent";

import { isEmptyObject } from "../../../utils/Validator";
import CharacterLocationInfo from "./CharacterLocationInfo";

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

  getLocationIdFromUrl = (url) => parseInt(url.substr(url.length - 2), 10);

  render() {
    const { data } = this.state;

    return (
      <>
        {!isEmptyObject(data) && (
          <Grid item lg={12}>
            <Card
              style={{
                display: "flex",
                maxWidth: "100%",
                backgroundColor: "rgb(60, 62, 68)",
                color: "whitesmoke",
              }}
            >
              <Grid item xs={5}>
                <CharacterCardMedia image={data.image} />
              </Grid>

              <Grid item xs={7}>
                <CharacterCardContent
                  name={data.name}
                  status={data.status}
                  species={data.species}
                  locationName={data.location.name}
                />

                <CharacterLocationInfo
                  id={this.getLocationIdFromUrl(data.location.url)}
                />
              </Grid>
            </Card>
          </Grid>
        )}
      </>
    );
  }
}

CharacterProfile.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CharacterProfile;
