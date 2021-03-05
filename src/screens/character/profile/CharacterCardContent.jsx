import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Brightness1Icon from "@material-ui/icons/Brightness1";
import CustomIcon from "../../../components/icon/CustomIcon";

const useStyles = makeStyles({
  content: {
    flex: "1 0 auto",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgb(158, 158, 158)",
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
  },
});

const CharacterCardContent = (props) => {
  const classes = useStyles();

  const { name, status, species, locationName } = props;

  function handlingStatusIcon(someStatus) {
    let resultIcon;
    switch (someStatus.toLowerCase()) {
      case "alive":
        resultIcon = (
          <CustomIcon IconComponent={<Brightness1Icon />} color="green" />
        );
        break;

      case "dead":
        resultIcon = (
          <CustomIcon IconComponent={<Brightness1Icon />} color="red" />
        );
        break;

      case "unknown":
        resultIcon = (
          <CustomIcon IconComponent={<Brightness1Icon />} color="gray" />
        );
        break;

      default:
        resultIcon = (
          <CustomIcon IconComponent={<Brightness1Icon />} color="orange" />
        );
        break;
    }
    return resultIcon;
  }

  return (
    <CardContent>
      <Box mb={3}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom>
          {handlingStatusIcon(status)}
          {` ${status} - ${species}`}
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography className={classes.title}>Last known location:</Typography>
        <Typography className={classes.text} gutterBottom>
          {locationName}
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography className={classes.title}>First seen in:</Typography>
        <Typography className={classes.text} gutterBottom>
          Pilot
        </Typography>
      </Box>
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
