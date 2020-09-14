import React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function Footer(props) {
  return (
    <Grid container className="footer">
      <Grid item xs={12}>
        <Typography align="center">
          <small>
            Made by passion, <b>Badr MOUFAD</b>
          </small>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">
          <small>17 Sep 2020</small>
        </Typography>
      </Grid>
    </Grid>
  );
}
