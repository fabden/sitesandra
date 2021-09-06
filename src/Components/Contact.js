import { Box, Container, Grid, Typography, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import React from "react";

function Contact() {
  return (
    <Container>
      <Box my={3}>
        <Grid container justifyContent="space-around" spacing={1}>
          <Grid item>
            <Link href="https://www.facebook.com/JoliBaobab/">
              <FacebookIcon fontSize="large"></FacebookIcon>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com/jolibaobab/">
              <InstagramIcon fontSize="large"></InstagramIcon>
            </Link>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
                <Link href="mailto:email@exemple.com?subject=Sujet du message">
              <EmailIcon fontSize="large"></EmailIcon></Link>
              <Typography ailgn="center">s.vallon@yahoo.fr</Typography>
              
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
