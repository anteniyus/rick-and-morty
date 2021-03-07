import React, { Component } from "react";
import PropTypes from "prop-types";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import RestApi from "../../../rest/RestApi";
import { isEmptyObject, notNullArray } from "../../../utils/Validator";

class CharacterLocationOriginInfo extends Component {
  constructor(props) {
    super(props);

    this.api = new RestApi();

    this.state = {
      data: {},
      loading: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;

    if (id) this.setState({ loading: true }, () => this.getSingleLocation(id));
  }

  getSingleLocation = (id) =>
    this.api
      .GetSingleLocation(id)
      .then((response) => this.setState({ data: response.data }))
      .finally(() => this.setState({ loading: false }));

  createUI = (data, title) => (
    <>
      {!isEmptyObject(data) && (
        <>
          <Typography className="title">{`${title} Type:`}</Typography>
          <Typography className="text" gutterBottom>
            {data.type}
          </Typography>

          <Typography className="title">{`${title} Dimension:`}</Typography>
          <Typography className="text" gutterBottom>
            {data.dimension}
          </Typography>

          <Typography className="title">Amount of Residents:</Typography>
          <Typography className="text">
            {notNullArray(data.residents) ? data.residents.length : 0}
          </Typography>
        </>
      )}
    </>
  );

  render() {
    const { data, loading } = this.state;
    const { name, title } = this.props;

    return (
      <>
        <CardContent>
          <Typography className="title">{`${title} Name:`}</Typography>
          <Typography className="text" gutterBottom>
            {name || data.name}
          </Typography>

          {loading ? (
            <Skeleton animation="wave" width="25%" height="100%" />
          ) : (
            this.createUI(data, title)
          )}
        </CardContent>
      </>
    );
  }
}

CharacterLocationOriginInfo.defaultProps = {
  name: "",
};

CharacterLocationOriginInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default CharacterLocationOriginInfo;
