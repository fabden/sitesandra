import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Container,
  Box,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import logo from "../asset/images/logo.png";

const usestyles = makeStyles((theme) => ({
  root:{
    height:'90px',
  }
 
}));

function Menus() {

  const classes = usestyles();

  return (
    <Container maxWidth={false}>
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} container justifyContent="center">
              <Link href="/#">
                <img src={logo} alt="logo jolieboabab" className={classes.root} />
              </Link>
            </Grid>
            <Grid item xs={6} container justifyContent="space-evenly">
              <Grid item>
                <Link href="/#marche">Marchés</Link>
              </Grid>
              <Grid item>
                <Link href="/#creation">Créations</Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Menus;
