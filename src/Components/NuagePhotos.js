import {
  Container,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import photo1 from "../asset/images/photo1.png";
import photo2 from "../asset/images/photo2.png";
import photo3 from "../asset/images/photo3.png";
import photo15 from "../asset/images/photo15.png";
import photo16 from "../asset/images/photo16.png";
import photo6 from "../asset/images/photo6.png";
import photo7 from "../asset/images/photo7.png";
import photo8 from "../asset/images/photo8.png";
import photo9 from "../asset/images/photo9.png";
import photo17 from "../asset/images/photo17.png";
import photo11 from "../asset/images/photo11.png";
import photo12 from "../asset/images/photo12.png";

const usestyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(25deg, rgba(88, 207, 144, 0.8) , rgb(254, 254, 2,0.5) )",
    width: "100%",
    padding: "40px",
  },
  imgcover: {
    objectFit: "cover",
  

  },
  Card: {},
  CardImage: {},
  CardImageText: {},
}));

function NuagePhotos() {
  const classes = usestyles();

  // eslint-disable-next-line no-unused-vars
  const [listeimg, setlisteimg] = useState([
    {
      imgphoto: photo1,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo2,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo3,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo15,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo16,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo6,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo7,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo8,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo9,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo17,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo11,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo12,
      titrephot: "titrephoto",
      about: "fab",
    },
  ]);

  return (
    <Container maxWidth={false} disableGutters className={classes.root}>
      <Grid container alignItems="center" direction="column">
        <Box my={5} color="#ffffff">
          <Typography variant="h3">Quelque Créations</Typography>
        </Box>
        <Grid item xs={8} container justifyContent="center" alignItems="center">
          {listeimg.map((img) => (
            <CardPhotos
              key={uuidv4()}
              photocard={img.imgphoto}
              photoAlt={img.titrephot}
            >
            </CardPhotos>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
export default NuagePhotos;

const CardPhotos = ({ photocard, photoAlt }) => {
  const classes = usestyles();

  return (
    <>
      <Box
        position="relative"
        height="300px"
        width="200px"
        overflow="hidden"
        className={classes.Card}
      >
        <Box position="absolute" className={classes.CardImage}>
          <img src={photocard} alt={photoAlt} className={classes.imgcover} />
        </Box>
{       /* <Box
          position="absolute"
          bottom="0px"
          p={1}
          bgcolor="rgba(144, 222, 158, 0.6)"
          className={classes.CardImageText}
        >
          <Typography align="center" variant="body1">
            {" "}
            text ecriture gfffff fffffffffffff fffffff ffjfjhgjghj kghkghkxcxcx{" "}
          </Typography>
</Box> */}
      </Box>
    </>
  );
};
