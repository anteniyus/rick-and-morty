import React from "react";
import PropTypes from "prop-types";

import CardMedia from "@material-ui/core/CardMedia";

const CharacterMedia = (props) => {
  const { image, className } = props;

  return (
    <CardMedia
      className={className}
      component="img"
      alt="Contemplative Reptile"
      height="140"
      image={image}
      title="Contemplative Reptile"
    />
  );
};

CharacterMedia.defaultProps = {
  className: "responsiveImage",
};

CharacterMedia.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CharacterMedia;
