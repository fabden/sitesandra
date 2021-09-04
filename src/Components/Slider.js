import { Container, Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import imgp from "../asset/logo192.png";

const usestyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to right, rgba(88, 207, 144, 0.6) , rgb(254, 254, 2,0.6) )",
    position: "absolute",
    width:'100%',
    height:'600px'
  },
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
}));

function slider() {
  const classes = usestyles();

  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Grid container className={classes.positionRelative} justifyContent="center" >
          <Box height='600px' width='100%' display="flex" justifyContent="center" alignItems="center" zIndex="tooltip">
            <Typography variant="h1">fdfdffds</Typography>
          </Box>
          <Carousel
            autoPlay={true}
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            className={classes.root}
          >
            <Box height='600px'>
              <img src={imgp} />
            </Box>
            <Box height='600px'>
              <img src="assets/1.jpeg" />
            </Box>
            <Box height='600px'>
              <img src="assets/1.jpeg" />
            </Box>
            <Box height='600px'>
              <img src="assets/1.jpeg" />
            </Box>
          </Carousel>
        </Grid>
      </Container>
    </>
  );
}

export default slider;
