import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import PromiseFooter from "./PromiseFooter";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export const Contact = () => {
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
      <Container>
        <Box sx={{ marginBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Typography component="h1" variant="h3">
                Contact Us
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" fontFamily={"Oxygen"}>Our Location</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" fontFamily={"Oxygen"}>
                Come visit our friendly lovely store
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "20px", marginTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={12}>
              <img
                style={{ width: "100%" }}
                src="/images/moorePlantsMap.svg"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "50px" }}>
          <Grid container justifyContent={"space-evenly"} marginBottom={"50px"}>
            <Grid item md={4} xs={12}>
              <Stack spacing={2} alignItems={"center"}>
                <RoomOutlinedIcon sx={{ fontSize: "35px" }} />
                <Typography>Retail Store</Typography>
                <CircleIcon sx={{ fontSize: "35px" }} />
                <Typography>Delivery Range</Typography>
                <Typography>Mon - Sat 9am to 5pm</Typography>
                <Typography>25 Winchester Street</Typography>
                <Typography>Lyttleton</Typography>
                <Typography>Canterbury</Typography>
              </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
              <Stack spacing={2} alignItems={"center"}>
                <MailOutlineOutlinedIcon sx={{ fontSize: "35px" }} />
                <Typography>Email Address</Typography>
                <Typography>info@mooreplants.co.nz</Typography>
              </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
              <Stack spacing={2} alignItems={"center"}>
                <PhoneOutlinedIcon sx={{ fontSize: "35px" }} />
                <Typography>03-385-8623</Typography>
                <Typography>022-9045-3012</Typography>
              </Stack>
            </Grid>
          </Grid>
          <PromiseFooter />
        </Box>
      </Container>
    </main>
  );
};
export default Contact;
