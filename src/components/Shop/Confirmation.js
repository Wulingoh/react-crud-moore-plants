import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

export const Confirmation = () => {


  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor:"#DDE5B6" }}
      >
        <Grid container marginBottom={"20px"}>
            <Grid item xs={12}>
                <Img src="/images/smiley.png" alt="" /> 
            </Grid>
        </Grid>
        <Typography component="h1" variant="h4" align="center" marginBottom={"10px"}>
          Thank you.
        </Typography>
        <Typography component="p" variant="body1" align="center" marginBottom={"10px"}>
          Your order was completed successfully. 
        </Typography>
        <Typography component="p" variant="body2" align="center" marginBottom={"10px"}>
          Please come back again.  
        </Typography>
      </Paper>
    </Container>
  );
};
