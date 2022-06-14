import React, { useEffect, useState } from "react";
import axios from "axios";
import useMediaQuery from '@mui/material/useMediaQuery';
import PlantFactsAccordion from "./PlantFactsAccordion";
import { PlantFactsDesktop } from "./PlantFactsDesktop";
import { useProductDetailsShopList } from "../FetchApi";
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
import { useCart } from './CartContext';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const PlantDetails = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const productDetails = useProductDetailsShopList();
  const { addProduct } = useCart()

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
                <Typography sx={{ textAlign: "start" }}>
                Title: {productDetails.title}
                </Typography>
                <Typography sx={{ textAlign: "start" }}>
                Price: ${productDetails.price}
                </Typography>
                <Typography sx={{ textAlign: "start" }}>
                Height: {productDetails.height}cm
                </Typography>
                <Typography sx={{ textAlign: "start" }}>
                Latin Name: {productDetails.latin_name}
                </Typography>
                {productDetails.quantity <= 0 ? (
                  <Typography sx={{ textAlign: "start", fontWeight:"600", color:"darkred" }}>Out Of Stock</Typography>
                ) : (
                <Typography sx={{ textAlign: "start" }}>In Stock</Typography>
                ) }
              </Stack>
              <Grid container sx={{marginTop: "20px"}}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={3} sx={{paddingRight:"40px"}}>
                      <WbSunnyOutlinedIcon />
                    </Grid>
                    <Grid item xs={9} sx={{paddingRight:"40px"}}>
                      <Typography>
                        {productDetails.lightingName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={3}>
                      <SentimentSatisfiedOutlinedIcon />
                    </Grid>
                    <Grid item xs={9} sx={{paddingRight:"40px"}}>
                      <Typography>
                      {productDetails.careLevelName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container sx={{marginTop:"20px"}}>
                <Grid item xs={12}>
                  {productDetails.quantity >= 0 && (
                  <Button
                    fullWidth
                    size="small"
                    onClick={() => addProduct(productDetails)}
                  >
                    ADD PLANT TO BAG
                  </Button>

                  )}
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
      {isMobile ? <PlantFactsAccordion /> : <PlantFactsDesktop />}
      <Box sx={{ marginBottom: "50px" }}>
        <PromiseFooter />
      </Box>
    </main>
  );
};
export default PlantDetails;
