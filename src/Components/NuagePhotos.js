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
import React from "react";

const usestyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(25deg, rgba(88, 207, 144, 0.8) , rgb(254, 254, 2,0.5) )",
    width: "100%",
    padding:"40px",
  },
}));

function NuagePhotos() {
  const classes = usestyles();
  return (
    <Container maxWidth={false} disableGutters className={classes.root}>
      <Grid container alignItems="center" direction="column">
        <Box my={5} color="#ffffff">
          <Typography variant='h2'>titre nuage photo</Typography>
        </Box>
        <Box width="80%">
          <ImageList cols={4} rowHeight={200} gap={1}>
            <ImageListItem>
              <img src={"item.img"} alt={"dggg"} />
            </ImageListItem>
            <ImageListItem>
              <img src={"item.img"} alt={"dggg"} />
              <ImageListItemBar
                title={"item.title"}
                subtitle={<span>by: {"item.author"}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${"item.title"}`}
                    className={"classes.icon"}
                  ></IconButton>
                }
              ></ImageListItemBar>
            </ImageListItem>
            <ImageListItem>
              <img src={"item.img"} alt={"dggg"} />
              <ImageListItemBar
                title={"item.title"}
                subtitle={<span>by: {"item.author"}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${"item.title"}`}
                    className={"classes.icon"}
                  ></IconButton>
                }
              ></ImageListItemBar>
            </ImageListItem>
            <ImageListItem>
              <img src={"item.img"} alt={"dggg"} />
              <ImageListItemBar
                title={"item.title"}
                subtitle={<span>by: {"item.author"}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${"item.title"}`}
                    className={"classes.icon"}
                  ></IconButton>
                }
              ></ImageListItemBar>
            </ImageListItem>
            <ImageListItem>
              <img src={"item.img"} alt={"dggg"} />
              <ImageListItemBar
                title={"item.title"}
                subtitle={<span>by: {"item.author"}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${"item.title"}`}
                    className={"classes.icon"}
                  ></IconButton>
                }
              ></ImageListItemBar>
            </ImageListItem>
          </ImageList>
        </Box>
      </Grid>
    </Container>
  );
}

export default NuagePhotos;
