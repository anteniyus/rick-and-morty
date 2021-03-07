import React, { Component } from "react";
import PropTypes from "prop-types";

import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import RestApi from "../../../rest/RestApi";

export default class CharacterEpisode extends Component {
  constructor(props) {
    super(props);

    this.api = new RestApi();

    this.state = {
      episodesName: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const loadedEpisodesName = [];
    await this.loadEpisodesName().then((results) =>
      results.forEach((result) => loadedEpisodesName.push(result.data.name))
    );

    this.setState({ episodesName: loadedEpisodesName, loading: false });
  }

  loadEpisodesName = () => {
    const { episodes } = this.props;

    return Promise.all(
      episodes.map((episodeUrl) => this.api.SendRequest("Get", episodeUrl))
    );
  };

  render() {
    const { episodesName, loading } = this.state;
    return (
      <CardContent>
        <Typography className="title">Episodes:</Typography>

        {loading ? (
          <Skeleton animation="wave" width="25%" height="100%" />
        ) : (
          episodesName.map((episodeName) => (
            <Typography className="text" key={episodeName}>
              {episodeName}
            </Typography>
          ))
        )}
      </CardContent>
    );
  }
}

CharacterEpisode.propTypes = {
  episodes: PropTypes.instanceOf(Array).isRequired,
};
