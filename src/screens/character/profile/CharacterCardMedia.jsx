import React from "react";
import PropTypes from "prop-types";

import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cover: {
    height: "auto",
  },
});

const CharacterCardMedia = (props) => {
  const classes = useStyles();

  const { image } = props;

  return (
    <CardMedia
      className={classes.cover}
      component="img"
      alt="Contemplative Reptile"
      height="140"
      image={image}
      title="Contemplative Reptile"
    />
  );
};

CharacterCardMedia.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CharacterCardMedia;
