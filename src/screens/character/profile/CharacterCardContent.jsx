import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import Brightness1Icon from "@material-ui/icons/Brightness1";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "220px",
    maxWidth: "100%",
    backgroundColor: "rgb(60, 62, 68)",
    color: "whitesmoke",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "whitesmoke",
  },
});

const CharacterCardContent = (props) => {
  const classes = useStyles();

  const { name, status, species, locationName } = props;

  function handlingStatusIcon(someStatus) {
    return someStatus === "Alive" ? (
      <Brightness1Icon style={{ color: "green", fontSize: "10px" }} />
    ) : (
      <Brightness1Icon style={{ color: "red", fontSize: "10px" }} />
    );
  }

  return (
    <CardContent className={classes.content}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>

      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {handlingStatusIcon(status)}
        {` ${status} - ${species}`}
      </Typography>

      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Last known location:
      </Typography>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {locationName}
      </Typography>

      <Typography className={classes.title} color="textSecondary" gutterBottom>
        First seen in:
      </Typography>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Pilot
      </Typography>
    </CardContent>
  );
};

CharacterCardContent.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
};

export default CharacterCardContent;
