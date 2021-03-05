import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "220px",
    maxWidth: "100%",
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
    fontSize: 14,
  },
});

export default function CharacterProfile(props) {
  const classes = useStyles();

  const { name, status, species, locationName, image } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card className={classes.root}>
        <Grid item xs={5}>
          <CardMedia
            className={classes.cover}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title="Contemplative Reptile"
          />
        </Grid>

        <Grid item xs={7}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {`${status} - ${species}`}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Last known location:
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {locationName}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              First seen in:
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Pilot
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}

CharacterProfile.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
