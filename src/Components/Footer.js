import { Box, Container, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";


const usestyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(25deg, rgba(88, 207, 144, 0.8) , rgb(254, 254, 2,0.5) )",
    width: "100%",

  },

}));

function Footer() {

  const classes = usestyles();
  return (
    <>
      <Box py={3}>
        <Container className={classes.root} maxWidth={false} >
          <Grid container   justifyContent="center"  alignItems="center" >
            <Button color="primary" component={Link} to="/Condition-Generale">
             <Typography variant='body2'> Condition general d'utilisation</Typography> 
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
