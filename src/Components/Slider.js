import { Container, Box, Grid, Typography, Hidden } from "@material-ui/core";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../asset/images/slide1.jpg";
import img2 from "../asset/images/slide2.jpg";
import img3 from "../asset/images/slide3.jpg";

const usestyles = makeStyles((theme) => ({
  root: {
    
    position: "absolute",
    width:'100%',
    
  },
  positionRelative: {
    position: "relative",
    height:'600px',
    background:"linear-gradient(45deg, rgba(88, 207, 144, 0.4) , rgb(254, 254, 2,0.4) )",
    backgroundImage: `url(${img3})`,
  },
  positionAbsolute: {
    position: "absolute",
  },
  transparense:{
    opacity: '1',
    objectFit: 'cover',
  },
  index:{
      zIndex:'1',
  },

}));

function slider() {
  const classes = usestyles();

  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Box height='100px'></Box>
        <Grid container className={classes.positionRelative} justifyContent="center" >
          <Box color='#ffffff' height='600px' width='80%' display="flex" justifyContent="center" alignItems="center" className={classes.index}>
            <Typography align='center' variant="h3">Laissez-vous tenter par des produits utiles, beaux, durables, écologiques et fait main en Ardèche</Typography>
          </Box>
          <Hidden smDown>
          <Carousel
            autoPlay={true}
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            className={classes.root}
            interval={6000} 
          >
            <Box height='600px' >
              <img src={img1} className={classes.transparense}  alt="riviere ardeche"/>  
            </Box>
            <Box height='600px' >
              <img src={img2} className={classes.transparense} alt="riviere ardeche" />
            </Box>
            <Box height='600px' >
              <img src={img3} className={classes.transparense} alt="riviere ardeche" />
            </Box>
          </Carousel>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
}

export default slider;
