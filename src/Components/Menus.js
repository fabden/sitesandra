import React from "react";
import { AppBar, Toolbar, Grid, Container } from "@material-ui/core";

function Menus() {
  return (
    <Container maxWidth={false}>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={3}>
              image
            </Grid>
            <Grid item xs={9} container justifyContent="space-evenly">
              <Grid item>accuiel</Grid>
              <Grid item>a-propos</Grid>
              <Grid item>portefolio</Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Menus;
