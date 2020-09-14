import React from "react";
import "./styles.css";

import Header from "./components/header";
import ResearchField from "./components/researchField";
import ZoogleLogo from "./components/zoogleLogo";
import Footer from "./components/footer";

import { Grid } from "@material-ui/core";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Grid container justify="center" className="content-body">
        <Grid item xs={12} sm={10}>
          <ZoogleLogo />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          style={{ paddingLeft: "5px", paddingRight: "20px" }}
        >
          <ResearchField />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
