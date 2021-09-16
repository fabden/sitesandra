import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import photo18 from "../asset/images/photo18.png";
import photo19 from "../asset/images/photo19.png";
import photo20 from "../asset/images/photo20.png";
import photo21 from "../asset/images/photo21.png";
import React from "react";

const usestyles = makeStyles((theme) => ({
  Fond1: {
    background:
      "linear-gradient(45deg, rgba(88, 207, 144, 0.8) , rgb(254, 254, 2,0.4) )",
  },
  root: {
    marginTop: "50px",
    marginBottom: "50px",
  },
}));

function Categorie() {
  const classes = usestyles();
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
         
            categorie="Respect de l'environnement et de la santé"
            colorb="rgb(254, 254, 2,0.1)"
            photo={photo18}
          ></CardCategorie>
          <CardCategorie
           
            categorie="Fabriquer en Ardèche avec soin"
            colorb="rgb(254, 254, 2,0.78)"
            photo={photo21}
          ></CardCategorie>
          <CardCategorie
         
            categorie="Produits éco-responsables"
            colorb="#454545"
            photo={photo20}
          ></CardCategorie>
          <CardCategorie
           
            categorie="Créations artisanales"
            colorb="#454545"
            photo={photo19}
          ></CardCategorie>
        </Grid>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box my={4}>
        <Typography variant="h3" align="center">
       
          Chaque seconde, 634000Kg de dechet deversés dans les océans
        </Typography>
       </Box>
        <Grid
          item
          container
          justifyContent="space-around"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box fontSize="55px" clone>
                <ThumbUpAltIcon ></ThumbUpAltIcon>
              </Box>
              <Box ml="10px">
                <Typography variant="h3">304</Typography>
                <Typography variant="h5">Likes</Typography>
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
                <Typography variant="h3">30</Typography>
                <Typography variant="h5">Motif de tissus</Typography>
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
                <Typography variant="h3">35</Typography>
                <Typography variant="h5">Produits diférents</Typography>
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
                <PersonIcon></PersonIcon>
              </Box>
              <Box ml="10px">
                <Typography variant="h3">1252</Typography>
                <Typography variant="h5">Belles Rencontres</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box my={4}>
          <Typography variant="h4" align="center">
            Mieux vaut prendre le changement par la main avant qu'il ne nous
            prenne par la gorge
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
export default Categorie;

const CardCategorie = ({ icone, categorie, photo }) => {
  const classes = usestyles();

  return (
    <Box height="500px" width="300px" clone>
      <Grid item xl>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="40%"
          className={classes.Fond1}
        >

          <Box mt={0} p={1} color="#ffffff">
            <Typography variant="h4" align="center">
              {categorie}
            </Typography>
          </Box>
        </Box>
        <Box height="60%" overflow="hidden">
          <img src={photo} alt="{img.titrephot}" />
        </Box>
      </Grid>
    </Box>
  );
};
