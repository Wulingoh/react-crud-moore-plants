import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {  Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Stack, Paper} from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const ImageItem = styled("img") ({
  display:"flex",
  maxWidth: "100%",
  maxHeight: "100%",

})

export const HomeGreenDesktop = () => {
    return (
      <Container disableGutters>
        <Grid container direction="row" mt={4} flexWrap={"nowrap"} spacing={1}>
          <Grid item xs={4}>
            <ImageItem src="/images/homeImg7.png" alt="" />
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={0}>
              <ImageItem
                src="/images/homeImg8.png"
                alt=""
                sx={{ marginBottom: "12px", maxHeight: "295px" }}
              />
              <ImageItem src="/images/homeImg9.png" alt="" />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "3px solid #B5AEAB",
              }}
            >
              <Container maxWidth={"xs"}>
                <Link to={`/howToGreen`} style={{textDecoration: "none"}}>
                  <Typography
                    variant="h4"
                    fontFamily={"Oxygen"}
                    textAlign={"start"}
                    marginTop={"100px"}
                    marginBottom={"20px"}
                    fontSize={"30px"}
                    color= {"#2E4D43"}
                  >
                    How to Green
                  </Typography>
                </Link>
                <Typography variant="body2" textAlign={"start"}>
                  Plants are as important as other accessories in the space.
                  Well-chosen plants — artfully displayed — enhance your home’s
                  unique look and make it feel healthier and more connected with
                  nature. In this article I will introduce you to the most
                  beautiful indoor plants and creative ways to use them in the
                  interior.
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
}