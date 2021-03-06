import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import Brightness1Icon from "@material-ui/icons/Brightness1";
import CustomIcon from "../../../components/icon/CustomIcon";

const CharacterContent = (props) => {
  const { name, status, species, type, gender } = props;

  function handlingStatusIcon(someStatus) {
    let resultIconColor;
    switch (someStatus && someStatus.toLowerCase()) {
      case "alive":
        resultIconColor = "green";
        break;

      case "dead":
        resultIconColor = "red";
        break;

      case "unknown":
        resultIconColor = "gray";
        break;

      default:
        resultIconColor = "orange";
        break;
    }

    return (
      <CustomIcon IconComponent={<Brightness1Icon />} color={resultIconColor} />
    );
  }

  return (
    <CardContent>
      <Box mb={3}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>
          {handlingStatusIcon(status)}
          {` ${status} - ${species}`}
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography className="title">Type:</Typography>
        <Typography className="text">{type || "unknown"}</Typography>
      </Box>

      <Box>
        <Typography className="title">Gender:</Typography>
        <Typography className="text">{gender || "unknown"}</Typography>
      </Box>
    </CardContent>
  );
};

CharacterContent.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default CharacterContent;
