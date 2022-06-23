import * as React from "react";
import PromiseFooter from "./PromiseFooter";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const Story = () => {
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
      <Container>
        <Box sx={{ marginBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Typography variant="h4">Our Story</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              <Img src="/public/images/storyImg.png" alt="" />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Container>
                <Typography sx={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "600" }}>Moore Plants</span> is an independent indoor plants retail brand,
                  established in Lyttleton, New Zealand in 2018. We make stylish
                  indoor plants easy and accessible to all with great looking
                  houseplant varieties, the biggest selection of planters and
                  indoor plant care essentials delivered to your door, 6 days a
                  week.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Box>
        <Divider></Divider>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Container>
                <Typography sx={{ textAlign: "justify" }}>
                  We’re a team of plant lovers with a low tolerance for bad
                  aesthetics so you can be sure our plants will look the part.
                  With a changing selection of trending houseplants and the
                  biggest collection of planters to choose from, you’ll always
                  find something you love.
                </Typography>
              </Container>
            </Grid>
            <Grid item md={6} sm={12}>
              <Img src="/public/images/storyImg1.png" alt="" />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "50px" }}>
          <PromiseFooter />
        </Box>
      </Container>
    </main>
  );
};
export default Story;
