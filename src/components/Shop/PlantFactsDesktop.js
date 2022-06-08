import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductDetailsShopList } from "../FetchApi";
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
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export const PlantFactsDesktop = () => {
  const productDetails = useProductDetailsShopList();
  return (
    <div style={{ marginBottom: "50px" }}>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway", fontWeight:"700"  }}>Plant Like</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginBottom: "50px",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            md={4}
            sm={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Container>
              <Grid container>
                <Grid item xs={2} sx={{ paddingLeft: "40px" }}>
                  <OpacityOutlinedIcon />
                </Grid>
                <Grid item xs={10} sx={{ paddingRight: "50px" }}>
                  <Typography sx={{ fontFamily: "Raleway" }}>
                    {productDetails.wateringName}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={2} sx={{ paddingLeft: "40px" }}>
                  <WbSunnyOutlinedIcon />
                </Grid>
                <Grid item xs={10} sx={{ paddingRight: "50px" }}>
                  <Typography sx={{ fontFamily: "Raleway" }}>
                    {productDetails.lightingName}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item md={4} sm={12}>
            <Container>
              <Grid container>
                <Grid item xs={2}>
                  <ThermostatOutlinedIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ fontFamily: "Raleway" }}>
                    {productDetails.humidityName}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway", fontWeight:"700"  }}>Quick Facts</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginBottom: "50px",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid container spacing={3}>
          {productDetails.facts?.map((fact) => (
            <Grid
              item
              md={4}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Container>
                <Stack>
                  <Box item sx={{marginBottom:"10px"}}>
                    <Typography sx={{ fontFamily: "Oxygen", fontWeight:"Medium" }}>
                      {fact.title}:
                    </Typography>
                  </Box>
                  <Box item>
                    <Typography sx={{ fontFamily: "Oxygen", fontWeight:"Regular"}}>
                      {fact.description}
                    </Typography>
                  </Box>
                </Stack>
              </Container>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway", fontWeight:"700"  }}>About Plant</Typography>
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
        <Grid container spacing={1}>
          <Grid item md={12} sm={12} sx={{ display: "flex" }}>
            <Container>
              <Grid container alignItems={"flex-start"}>
                <Grid item xs={2}>
                  <FactCheckOutlinedIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ fontFamily: "Raleway" }}>
                    {productDetails.content}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
