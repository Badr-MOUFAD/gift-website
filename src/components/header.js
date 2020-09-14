import React from "react";

import { Grid, Link, Avatar } from "@material-ui/core";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";

export default function Header(props) {
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={3}>
      <Grid item>
        <Link color="inherit">Zmail</Link>
      </Grid>
      <AppsRoundedIcon />
      <Grid item style={{ marginRight: "2px" }}>
        <Avatar>ZM</Avatar>
      </Grid>
    </Grid>
  );
}
