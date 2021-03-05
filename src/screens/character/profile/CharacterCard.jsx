import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CharacterCardMedia from "./CharacterCardMedia";
import CharacterCardContent from "./CharacterCardContent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "220px",
    maxWidth: "100%",
    backgroundColor: "rgb(60, 62, 68)",
    color: "whitesmoke",
  },
});

export default function CharacterCard(props) {
  const classes = useStyles();

  const { name, status, species, locationName, image, id } = props;
  const linkUrl = `/character/${id}`;

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Link
        to={linkUrl}
        style={{
          textDecoration: "none",
        }}
      >
        <Card className={classes.root}>
          <Grid item xs={5}>
            <CharacterCardMedia image={image} />
          </Grid>

          <Grid item xs={7}>
            <CharacterCardContent
              name={name}
              status={status}
              species={species}
              locationName={locationName}
            />
          </Grid>
        </Card>
      </Link>
    </Grid>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
