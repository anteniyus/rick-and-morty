import React from "react";
import PropTypes from "prop-types";

const CustomIcon = (props) => {
  const { IconComponent, color, fontSize } = props;

  // eslint-disable-next-line react/jsx-pascal-case
  return <IconComponent.type style={{ color, fontSize }} />;
};

CustomIcon.defaultProps = {
  color: "green",
  fontSize: "10px",
};

CustomIcon.propTypes = {
  IconComponent: PropTypes.element.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

export default CustomIcon;
