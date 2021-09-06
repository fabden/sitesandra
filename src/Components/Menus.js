import React from "react";
import { AppBar, Toolbar, Grid, Container, Box, Link} from "@material-ui/core";
import logo from "../asset/images/logo.png";



function Menus() {
  return (
    <Container maxWidth={false}>
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} container justifyContent="center" >
              <Box width="100px" clone>
                <img src={logo} alt="logo jolieboabab" />
              </Box>
            </Grid>
            <Grid item xs={6} container justifyContent="space-evenly">
              <Grid item>
                {" "}
                <Link href="/#">Accueil</Link>{" "}
              </Grid>
              <Grid item>
                <Link href="/#marche">Marchés</Link>
              </Grid>
              <Grid item>
                <Link href="/#creation">Création</Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Menus;
