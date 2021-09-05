import React from "react";
import { AppBar, Toolbar, Grid, Container, Box } from "@material-ui/core";
import logo from "../asset/images/logo.png";
import { Link } from "react-router-dom";

function Menus() {
  return (
    <Container maxWidth={false}>
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={3} container  justifyContent="center">
              <Box width="100px" clone>
                <img src={logo} alt="logo jolieboabab" />
              </Box>
            </Grid>
            <Grid item xs={9} container justifyContent="space-evenly">
              <Grid item> <Link to='/'>Accueil</Link> </Grid>
              <Grid item><Link to='/#marche'>Marchés</Link></Grid>
              <Grid item><Link to='/#creation'>Création</Link></Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Menus;
