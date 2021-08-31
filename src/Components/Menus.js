import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";

function Menus() {
  return (
    <AppBar position="sticky">
      <Container maxWidth>
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
      </Container>
    </AppBar>
  );
}

export default Menus;
