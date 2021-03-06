import React, { Component } from "react";
import PropTypes from "prop-types";

import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import RestApi from "../../../rest/RestApi";

// eslint-disable-next-line react/prefer-stateless-function
export default class CharacterEposide extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.api = new RestApi();

    this.state = {
      episodesName: [],
    };
  }

  async componentDidMount() {
    const loadedEpisodesName = [];
    await this.loadEpisodesName().then((results) =>
      results.forEach((result) => loadedEpisodesName.push(result.data.name))
    );

    this.setState({ episodesName: loadedEpisodesName });
  }

  loadEpisodesName = () => {
    const { episodes } = this.props;

    return Promise.all(
      episodes.map((episodeUrl) => this.api.SendRequest("Get", episodeUrl))
    );
  };

  render() {
    const { episodesName } = this.state;
    return (
      <>
        <CardContent>
          <Typography
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "rgb(158, 158, 158)",
            }}
          >
            Episodes:
          </Typography>

          {episodesName.map((episodeName) => (
            <Typography
              style={{
                fontSize: 14,
                fontWeight: 500,
              }}
              key={episodeName}
            >
              {episodeName}
            </Typography>
          ))}
        </CardContent>
      </>
    );
  }
}

CharacterEposide.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
};
