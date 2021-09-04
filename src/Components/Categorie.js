import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import OpacityIcon from "@material-ui/icons/Opacity";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import PublicIcon from "@material-ui/icons/Public";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import React from "react";

const usestyles = makeStyles((theme) => ({
  Fond1: {
    background:
      "linear-gradient(45deg, rgba(88, 207, 144, 0.6) , rgb(254, 254, 2,0.4) )",
  },
  root:{
      marginTop:'50px',
      marginBottom:'50px',
  }
}));

function Categorie() {
    const classes = usestyles()
  return (
    <Container>
      <Box py={5}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <CardCategorie
            icone={<OpacityIcon />}
            categorie="Cuisine"
            colorb="rgb(254, 254, 2,0.1)"
          ></CardCategorie>
          <CardCategorie
            icone={<AutorenewIcon />}
            categorie="Salle de bain"
            colorb="rgb(254, 254, 2,0.78)"
          ></CardCategorie>
          <CardCategorie
            icone={<LocalFloristIcon />}
            categorie="Enfant"
            colorb="#454545"
          ></CardCategorie>
          <CardCategorie
            icone={<PublicIcon />}
            categorie="Bijoux"
            colorb="#454545"
          ></CardCategorie>
        </Grid>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" align='center'> Every day 8,000 beavers perished</Typography>
        <Grid item container justifyContent="space-around" alignItems="center" className={classes.root}>
          <Grid item>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box fontSize="55px" clone>
                <ThumbUpAltIcon></ThumbUpAltIcon>
              </Box>
              <Box ml="10px">
                <Typography>ghgghgh</Typography>
                <Typography>ghgghghhhhhhhhh</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box fontSize="55px" clone>
                <FavoriteIcon></FavoriteIcon>
              </Box>
              <Box ml="10px">
                <Typography>ghgghgh</Typography>
                <Typography>ghgghghhhhhhhhh</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box fontSize="55px" clone>
                <BlurCircularIcon></BlurCircularIcon>
              </Box>
              <Box ml="10px">
                <Typography>ghgghgh</Typography>
                <Typography>ghgghghhhhhhhhh</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box fontSize="55px" clone >
                <PersonIcon></PersonIcon>
              </Box>
              <Box ml="10px">
                <Typography>ghgghgh</Typography>
                <Typography>ghgghghhhhhhhhh</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" align='center'> Donec fringilla, erat et semper eleifend, justo quam sodales a vehicula ipsum libero eget mi. Integer condimentum, nibh aliquet.</Typography>
        <Button>donate</Button>
      </Grid>
    </Container>
  );
}
export default Categorie;

const CardCategorie = ({ icone, categorie, colorb }) => {
  const classes = usestyles();

  return (
    <Box height="460px" width="250px" clone>
      <Grid item xl>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="40%"
          className={classes.Fond1}
        >
          <Box clone fontSize="60px" color="#ffffff">
            {icone}
          </Box>
          <Box mt="20px" color="#ffffff">
            <Typography variant="h4">{categorie}</Typography>
          </Box>
        </Box>
        <Box height="60%" bgcolor="#125545">
          bas
        </Box>
      </Grid>
    </Box>
  );
};
