import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";

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

  const { children } = props;

  return <Card className={classes.root}>{children}</Card>;
};

CustomCard.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default CustomCard;
