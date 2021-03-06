import React, { Component } from "react";
import PropTypes from "prop-types";

import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import RestApi from "../../../rest/RestApi";

export default class CharacterEposide extends Component {
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
      <CardContent>
        <Typography className="title">Episodes:</Typography>

        {episodesName.map((episodeName) => (
          <Typography className="text" key={episodeName}>
            {episodeName}
          </Typography>
        ))}
      </CardContent>
    );
  }
}

CharacterEposide.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
};
