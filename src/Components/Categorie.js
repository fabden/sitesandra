import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import React from "react";

function Categorie() {
  return (
    <Container>
      categorie
      <Grid container justifyContent="space-around" alignItems="center">
        <CardCategorie></CardCategorie>
        <CardCategorie></CardCategorie>
        <CardCategorie></CardCategorie>
        <CardCategorie></CardCategorie>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3"> titre</Typography>
        <Grid item container justifyContent="space-around" alignItems="center">
          <Grid item>icone1</Grid>
          <Grid item>icone1</Grid>
          <Grid item>icone1</Grid>
          <Grid item>icone1</Grid>
        </Grid>
        <Typography variant="body1"> lore*vvvvvvvvvvvvvvvvvvvv5</Typography>
        <Button>donate</Button>
      </Grid>
    </Container>
  );
}
export default Categorie;

const CardCategorie = () => {
  return (
    <Box height="460px" width="250px" clone>
      <Grid item>
        <Box height="40%" bgcolor="#123545">
          haut
        </Box>
        <Box height="60%" bgcolor="#125545">
          bas
        </Box>
      </Grid>
    </Box>
  );
};
