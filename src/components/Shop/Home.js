import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import PromiseFooter from "./PromiseFooter";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Stack, Paper} from "@mui/material";
import { maxHeight, maxWidth } from "@mui/system";

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
              <Img src="/images/heroIndex.svg" alt="" />
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
              <Img src="/images/homeImg1.svg" alt="" />
            </Grid>
          </Grid>
        </Box>
        <Container>
          <Grid container mb={4}>
            <Grid item md={6} xs={12}>
              <Stack spacing={2}>
                <Img src="/images/homeImg2.png" alt="" />
                <Typography gutterBottom variant="h4" component="div">
                  Interior Plants
                </Typography>
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
                  src="/images/homeImg4.png"
                  alt=""
                  sx={{ marginTop: "20px" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Img src="/images/homeMiddleImg2.svg" alt="" />
          </Grid>
        </Grid>
        <Grid container alignItems={"flex-end"} mt={"20px"} mb={"20px"}>
          <Grid item md={6} xs={12} flexGrow={1}>
            <Img src="/images/homeImg6.svg" alt="" />
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
                <Typography gutterBottom variant="h4" component="div">
                  Pots
                </Typography>
                <Typography variant="body2" gutterBottom fontFamily={"Oxygen"}>
                  Indoor plant pots are perfect for displaying flowers and
                  plants around the home. From traditional terracotta plant pots
                  inspired by Spanish style to more contemporary designs, there
                  are plenty to suit every interior scheme.
                </Typography>
              </Grid>
              <Grid item xs={6} justifyContent="flex-end">
                <Img src="/images/homeImg5.svg" alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={4}>
          <Grid item xs={12}>
            <Img src="/images/homeMiddleImg1.svg" alt="" />
          </Grid>
        </Grid>
        <Container disableGutters>
          <Grid
            container
            direction="row"
            mt={4}
            flexWrap={"nowrap"}
            spacing={1}
          >
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
                  <Typography
                    variant="h4"
                    fontFamily={"Oxygen"}
                    textAlign={"start"}
                    marginTop={"100px"}
                    marginBottom={"20px"}
                  >
                    How to Green
                  </Typography>
                  <Typography variant="body2" textAlign={"start"}>
                    Plants are as important as other accessories in the space.
                    Well-chosen plants — artfully displayed — enhance your
                    home’s unique look and make it feel healthier and more
                    connected with nature. In this article I will introduce you
                    to the most beautiful indoor plants and creative ways to use
                    them in the interior.
                  </Typography>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </main>
  );
};

