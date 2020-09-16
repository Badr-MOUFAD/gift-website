import React, { useState } from "react";

import {
  InputBase,
  Paper,
  Grid,
  Button,
  Typography,
  Snackbar,
  Link
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";

export default function ResearchField(props) {
  const [open, setOpen] = useState(false);
  const [paperVariant, setPaperVariant] = useState("outlined");

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      setOpen(true);
    }
  };

  return (
    <React.Fragment>
      <Paper
        variant={paperVariant}
        elevation={6}
        style={{
          borderRadius: "9999px",
          padding: "7px",
          paddingLeft: "10px",
          width: "100%"
        }}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <SearchRoundedIcon color="action" />
          </Grid>
          <Grid item xs={10}>
            <InputBase
              fullWidth={true}
              onKeyDown={onKeyDownHandler}
              onFocus={() => setPaperVariant("elevation")}
              onBlur={() => setPaperVariant("outlined")}
              onMouseEnter={() => setPaperVariant("elevation")}
              onMouseOut={() => setPaperVariant("outlined")}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        spacing={1}
        justify="center"
        style={{ marginTop: "40px" }}
      >
        <Grid item>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Zoogle search
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setOpen(true)}>
            It's my birthday
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "20px" }}>
        <Typography align="center" variant="subtitle1">
          <small>
            Zoogle is celebrating <Link>Zoubir</Link> 21st anniversary
          </small>
        </Typography>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="info"
          variant="filled"
          elevation={6}
          style={{ justifyContent: "center" }}
        >
          <AlertTitle>
            <b>Happy birthday Zoubir</b>
          </AlertTitle>
          I wish you all health and prosperity <br />
          <CakeRoundedIcon />
          <CakeRoundedIcon />
          <CakeRoundedIcon />
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
