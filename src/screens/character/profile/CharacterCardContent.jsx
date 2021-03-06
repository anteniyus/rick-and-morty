import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import Brightness1Icon from "@material-ui/icons/Brightness1";
import CustomIcon from "../../../components/icon/CustomIcon";

const CharacterCardContent = (props) => {
  const { name, status, species, type, gender } = props;

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
        <Typography>
          {handlingStatusIcon(status)}
          {` ${status} - ${species}`}
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography className="title">Type:</Typography>
        <Typography className="text">{type}</Typography>
      </Box>

      <Box>
        <Typography className="title">Gender:</Typography>
        <Typography className="text">{gender}</Typography>
      </Box>
    </CardContent>
  );
};

CharacterCardContent.defaultProps = {
  type: "unknown",
};

CharacterCardContent.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string,
  gender: PropTypes.string.isRequired,
};

export default CharacterCardContent;
