import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import photo22 from "../asset/images/photo22.png";
import photo23 from "../asset/images/photo23.png";
import photo24 from "../asset/images/photo24.png";
import photo25 from "../asset/images/photo25.png";

function Marche() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant='h2' align="center">Retrouvez moi aux marchés</Typography>
        <Grid item container justifyContent="center" alignItems="center" >
          <Box m={2}>
            <img src={photo22 } alt="{img.titrephot}" />
          </Box>
          <Box m={2}>
          <img src={photo23 } alt="{img.titrephot}" />
          </Box>
          <Box m={2}>
          <img src={photo24} alt="{img.titrephot}" />
          </Box>
          <Box m={2}>
          <img src={photo25} alt="{img.titrephot}" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Marche;
