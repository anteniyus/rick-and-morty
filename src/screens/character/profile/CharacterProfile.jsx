import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import RestApi from "../../../rest/RestApi";

import CharacterMedia from "./CharacterMedia";
import CharacterContent from "./CharacterContent";

import { isEmptyObject } from "../../../utils/Validator";
import CharacterLocationOriginInfo from "./CharacterLocationOriginInfo";
import CharacterEpisode from "./CharacterEpisode";

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

  getLocationIdFromUrl = (url) =>
    parseInt(url.substr(url.lastIndexOf("/") + 1), 10);

  render() {
    const { data } = this.state;

    return (
      <>
        {!isEmptyObject(data) && (
          <Grid item lg={12}>
            <div className="cardRoot">
              <Grid item xs={5}>
                <CharacterMedia image={data.image} className="autoHeight" />
              </Grid>

              <Grid item xs={7}>
                <CharacterContent
                  name={data.name}
                  status={data.status}
                  species={data.species}
                  type={data.type}
                  gender={data.gender}
                />

                <CharacterLocationOriginInfo
                  id={this.getLocationIdFromUrl(data.location.url)}
                  title="Location"
                  name={data.location.name}
                />

                <CharacterLocationOriginInfo
                  id={this.getLocationIdFromUrl(data.origin.url)}
                  title="Origin"
                  name={data.origin.name}
                />

                <CharacterEpisode episodes={data.episode} />
              </Grid>
            </div>
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
