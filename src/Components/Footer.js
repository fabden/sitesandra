import { Box, Container, Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box p={3}>
        <Container >
          <Grid container   justifyContent="center"  alignItems="center" >
            <Button color="primary" component={Link} to="/Condition-Generale">
             <Typography variant='h7'> Condition general d'utilisation</Typography> 
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
