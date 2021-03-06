import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CharacterCardMedia from "./CharacterCardMedia";
import CharacterCardContent from "./CharacterCardContent";

import styles from "./CharacterProfile.module.css";

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

  const { data } = props;
  const linkUrl = `/character/${data.id}`;

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Link to={linkUrl} className={styles.noDecoration}>
        <Card className={classes.root}>
          <Grid item xs={5}>
            <CharacterCardMedia image={data.image} />
          </Grid>

          <Grid item xs={7}>
            <CharacterCardContent
              name={data.name}
              status={data.status}
              species={data.species}
              type={data.type}
              gender={data.gender}
            />
          </Grid>
        </Card>
      </Link>
    </Grid>
  );
}

CharacterCard.defaultProps = {
  data: [],
};

CharacterCard.propTypes = {
  data: PropTypes.instanceOf(Object),
};
