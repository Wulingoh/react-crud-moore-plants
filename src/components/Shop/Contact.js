import * as React from "react";
import { Link } from "react-router-dom";
import PromiseFooter from "./PromiseFooter";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};
const ButtonTelto = ({ tel, label }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to="#"
      onClick={(e) => {
        window.location.href = tel;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

const styles = {
  paperContainer: {
    maxWidth: "100vw",
    maxHeight: "100vh",
    backgroundImage: `url("/Images/moorePlantsMap.png")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "400px",
  },
};

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
              <Typography variant="h6" fontFamily={"Oxygen"}>
                Our Location
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h6" fontFamily={"Oxygen"}>
                Come visit our friendly lovely store
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "20px", marginTop: "30px" }}>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Paper
                style={styles.paperContainer}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start"
                }}
              >
                <Box sx={{
                  border: "dashed 4px #6C584C"
                }}>
                  <CircleIcon sx={{ fontSize: "35px" }} />
                  <Typography>Delivery Range</Typography>
                </Box>

              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "50px" }}>
          <Grid container justifyContent={"space-evenly"} marginBottom={"50px"}>
            <Grid item md={4} xs={12}>
              <Stack spacing={2} alignItems={"center"}>
                <RoomOutlinedIcon sx={{ fontSize: "35px" }} />
                <Typography>Retail Store</Typography>
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
                <ButtonMailto
                  label="info@mooreplants.co.nz"
                  mailto="mailto:no-reply@example.com"
                />
              </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
              <Stack spacing={2} alignItems={"center"}>
                <PhoneOutlinedIcon sx={{ fontSize: "35px" }} />
                <ButtonTelto label="03-385-8623" tel="tel:03-385-8623" />
                <ButtonTelto label="022-9045-3012" tel="tel:022-9045-3012" />
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
