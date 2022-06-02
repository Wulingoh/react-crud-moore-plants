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
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export const Story = () => {

  
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
      <Box sx={{ marginBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Typography variant="h4" fontFamily={"Raleway"}>Our Story</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "20px", marginTop:"30px", marginLeft:"10px", marginRight:"10px" }}>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12}>
            <Img src="/images/storyImg.svg" alt="" />
          </Grid>
          <Grid item md={6} sm={12} sx={{display:"flex", alignItems:"center"}}>
              <Container>
                <Typography sx={{textAlign:"justify", fontFamily:"Raleway"}}>Moore Plants is an independent indoor plants retail brand, established in Lyttleton, New Zealand in 2018. We make stylish indoor plants easy and accessible to all with great looking houseplant varieties, the biggest selection of planters and indoor plant care essentials delivered to your door, 6 days a week.</Typography>
              </Container>
          </Grid>
        </Grid>
      </Box>
      <Divider></Divider>
      <Box sx={{ marginBottom: "20px", marginTop:"30px", marginLeft:"10px", marginRight:"10px" }}>
        <Grid container spacing={3}>
          <Grid item md={6} sm={12} sx={{display:"flex", alignItems:"center"}}>
              <Container>
                <Typography sx={{textAlign:"justify", fontFamily:"Raleway"}}>We’re a team of plant lovers with a low tolerance for bad aesthetics so you can be sure our plants will look the part. With a changing selection of trending houseplants and the biggest collection of planters to choose from, you’ll always find something you love.</Typography>
              </Container>
          </Grid>
          <Grid item md={6} sm={12}>
            <Img src="/images/storyImg1.svg" alt="" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "50px" }}>
        <PromiseFooter />
      </Box>
    </main>
  );
};
export default Story;
