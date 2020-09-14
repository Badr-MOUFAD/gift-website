import React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function ZoogleLogo(props) {
  const communStyle = {
    fontWeight: "bolder",
    fontSize: "100px",
    marginRight: "1px"
  };
  const logoText = ["Z", "o", "o", "g", "l", "e"];
  const colorsMap = [
    "#395dfa",
    "#fcb103",
    "#de2626",
    "#395dfa",
    "#029c1e",
    "#de2626"
  ];

  return (
    <Grid container justify="center" alignItems="center">
      {logoText.map((char, index) => {
        return (
          <Grid item>
            <Typography
              key={index}
              style={{ color: colorsMap[index], ...communStyle }}
            >
              {char}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}
