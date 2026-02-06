import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { HomeGreenDesktop } from "./HomeGreenDesktop";
import { HomeGreenMobile } from "./HomeGreenMobile";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";

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

export const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
      <Container maxWidth={"lg"} disableGutters>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          <Grid container>
            <Grid item md={12} sm={12}>
              <Img src="/public/images/heroIndex.png" alt="" />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
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
                <Typography
                  sx={{ textAlign: "justify" }}
                  variant="body1"
                  fontFamily={"Oxygen"}
                >
                  What plants give to our lives. Warmth, comfort, freshness, a
                  delicate and bold expression that only nature can make.
                  Interior shop{" "}
                  <span style={{ fontWeight: "600" }}>Moore Plants</span> has
                  created a brand{" "}
                  <span style={{ fontWeight: "600" }}>"MOORE PLANTS" </span>
                  that captures plants as an indispensable element in daily life
                  and provides interior greens .
                </Typography>
              </Container>
            </Grid>
            <Grid item md={6} sm={12}>
              <Img src="/public/images/homeImg1.png" alt="" />
            </Grid>
          </Grid>
        </Box>
        <Container>
          <Grid container mb={4}>
            <Grid item md={6} xs={12}>
              <Stack spacing={2}>
                <Img src="/public/images/homeImg2.png" alt="" />
                <Link component={RouterLink} to={`/plants`} gutterBottom variant="h4" sx={{ color: "#2E4D43", textDecoration: "none", fontFamily: "Oxygen", fontSize: "30px" }}>
                  Interior Plants
                </Link>
                <Typography variant="body2" gutterBottom fontFamily={"Oxygen"}>
                  Houseplants add touches of natural beauty to your home while
                  providing you with the opportunity to nurture and care for
                  living things. We researched the best indoor plants and tested
                  them in our own homes, evaluating hardiness, ease of care, and
                  overall value.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={6} xs={12}>
              <Stack mt={6}>
                <Typography variant="body2" gutterBottom fontFamily={"Oxygen"}>
                  We realize various values ​​of plants that are warm, fresh,
                  delicate and good looking for our living. Since we thought it
                  was an essential element of their lives. We'd like to offer
                  the interior green lifestyle by Moore Plants.
                </Typography>
                <Img
                  src="/public/images/homeImg4.png"
                  alt=""
                  sx={{ marginTop: "20px" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Img src="/public/images/homeMiddleImg2.png" alt="" />
          </Grid>
        </Grid>
        <Grid container alignItems={"flex-end"} mt={"20px"} mb={"30px"}>
          <Grid item md={6} xs={12} flexGrow={1}>
            <Img src="/public/images/homeImg6.png" alt="" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container direction="column">
              <Grid
                item
                xs={6}
                sx={{
                  paddingLeft: "10px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <Link component={RouterLink} to={`/pots`} gutterBottom variant="h4" sx={{ color: "#2E4D43", textDecoration: "none", fontFamily: "Oxygen", fontSize: "30px" }}>
                  Pots
                </Link>
                <Typography variant="body2" gutterBottom fontFamily={"Oxygen"}>
                  Indoor plant pots are perfect for displaying flowers and
                  plants around the home. From traditional terracotta plant pots
                  inspired by Spanish style to more contemporary designs, there
                  are plenty to suit every interior scheme.
                </Typography>
              </Grid>
              <Grid item xs={6} justifyContent="flex-end">
                <Img src="/public/images/homeImg5.png" alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#6C584C", marginBottom:"20px", marginTop:"10px", borderBottomWidth: 1 }} />
        {isMobile ? <HomeGreenMobile /> : <HomeGreenDesktop />}
      </Container>
    </main>
  );
};

