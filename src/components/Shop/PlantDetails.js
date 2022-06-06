import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantFactsAccordion from "./PlantFactsAccordion";
import ProductCarousel from "./ProductCarousel";
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
import { Stack } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const PlantDetails = () => {
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
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
            <ProductCarousel />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            sx={{ display: "flex", alignItems: "space-between" }}
          >
            <Container>
              <Stack spacing={2}>
                <Typography sx={{ textAlign: "start", fontFamily: "Raleway" }}>
                  Title:
                </Typography>
                <Typography sx={{ textAlign: "start", fontFamily: "Raleway" }}>
                  Price $
                </Typography>
                <Typography sx={{ textAlign: "start", fontFamily: "Raleway" }}>
                  Height(cm):
                </Typography>
                <Typography sx={{ textAlign: "start", fontFamily: "Raleway" }}>
                  Latin Name:
                </Typography>
              </Stack>
              <Grid container>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={3}>
                      <WbSunnyOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography sx={{ fontFamily: "Raleway" }}>
                        Happy
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    size="small"
                    component={Link}
                    to={`/customer/products/`}
                  >
                    ADD PLANT TO BAG
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <PlantFactsAccordion />
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway" }}>Plant Like</Typography>
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
          <Grid
            item
            md={4}
            sm={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway" }}>Quick Facts</Typography>
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
          <Grid
            item
            md={4}
            sm={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway" }}>About Plant</Typography>
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
          <Grid
            item
            md={4}
            sm={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={3}>
                  <SentimentSatisfiedOutlinedIcon />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontFamily: "Raleway" }}>Happy</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "50px" }}>
        <PromiseFooter />
      </Box>
    </main>
  );
};
export default PlantDetails;
