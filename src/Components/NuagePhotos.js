import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@material-ui/core";
import React from "react";

function NuagePhotos() {
  return (
    <Container>
      <ImageList cols={4} rowHeight='auto'>
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
          />
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
            }></ImageListItemBar>
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
            }></ImageListItemBar>
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
            }></ImageListItemBar>
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
            }></ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </Container>
  );
}

export default NuagePhotos;
