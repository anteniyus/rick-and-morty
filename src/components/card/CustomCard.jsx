import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: "100%",
    height: "220px",
    backgroundColor: "rgb(60, 62, 68)",
    color: "whitesmoke",
  },
});
const CustomCard = (props) => {
  const classes = useStyles();

  const { children, className } = props;

  const multipleClasses = classNames({
    [classes.root]: true,
    [className]: true,
  });

  /*
   * Also it is possible to pass [classes.root, className].join(" ") to the following className
   * instead of using classNames library
   * */
  return <Card className={multipleClasses}>{children}</Card>;
};

CustomCard.defaultProps = {
  className: "",
};

CustomCard.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string,
};

export default CustomCard;
