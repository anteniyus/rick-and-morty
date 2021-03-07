import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import CharacterMedia from "./CharacterMedia";
import CharacterContent from "./CharacterContent";

import styles from "./CharacterCard.module.css";
import CustomCard from "../../../components/card/CustomCard";

export default function CharacterCard(props) {
  const { data } = props;
  const linkUrl = `/character/profile/${data.id}`;

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Link to={linkUrl} className={styles.noDecoration}>
        <CustomCard className={styles.boxShadow}>
          <Grid item xs={5}>
            <CharacterMedia image={data.image} />
          </Grid>

          <Grid item xs={7}>
            <CharacterContent
              name={data.name}
              status={data.status}
              species={data.species}
              type={data.type}
              gender={data.gender}
            />
          </Grid>
        </CustomCard>
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
