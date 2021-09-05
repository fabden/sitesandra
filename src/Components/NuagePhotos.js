import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

import photo1 from "../asset/images/photo1.png";
import photo2 from "../asset/images/photo2.png";
import photo3 from "../asset/images/photo3.png";
import photo4 from "../asset/images/photo4.png";
import photo5 from "../asset/images/photo5.png";
import photo6 from "../asset/images/photo6.png";
import photo7 from "../asset/images/photo7.png";
import photo8 from "../asset/images/photo8.png";
import photo9 from "../asset/images/photo9.png";
import photo10 from "../asset/images/photo10.png";
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
    objectFit: "container",
  },
}));

function NuagePhotos() {
  const classes = usestyles();

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
      imgphoto: photo4,
      titrephot: "titrephoto",
      about: "fab",
    },
    {
      imgphoto: photo5,
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
      imgphoto: photo10,
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
          <Typography variant="h3">Quelque ideés produits</Typography>
        </Box>
        <Box width="80%">
          <ImageList cols={6} rowHeight="auto" gap={1}>
            {listeimg.map((img) => (
              <ImageListItem>
                <img
                  src={img.imgphoto}
                  alt={img.titrephot}
                  className={classes.imgcover}
                />
      
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Container>
  );
}

export default NuagePhotos;
