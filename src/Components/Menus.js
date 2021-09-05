import React from "react";
import { AppBar, Toolbar, Grid, Container, Box } from "@material-ui/core";
import logo from "../asset/images/logo.png";

function Menus() {
  return (
    <Container maxWidth={false}>
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={3} container  justifyContent="center">
              <Box width="100px" clone>
                <img src={logo} alt="riviere ardeche" />
              </Box>
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
