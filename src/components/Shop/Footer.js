import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactComponent as MoorePlantLogo } from "../Images/moorePlantLogo1.svg";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#718879",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/" style={{textDecoration:"none", color:"#000"}}>
        Moore Plants
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const FormRow = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item
          sx={{
            boxShadow: "none",
            borderRadius: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/contact">
            <TwitterIcon style={{ fill: "#102F25" }} />
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item
          sx={{
            boxShadow: "none",
            borderRadius: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link  to="/contact">
            <FacebookIcon style={{ fill: "#102F25" }} />
          </Link>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item
          sx={{
            boxShadow: "none",
            borderRadius: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Link to="/contact">
            <InstagramIcon style={{ fill: "#102F25" }} />
          </Link>
        </Item>
      </Grid>
    </React.Fragment>
  );
};

export const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        paddingLeft: "0",
        paddingRight: "0",
        backgroundColor: "#718879",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} marginLeft="15px">
            <Item
              sx={{ boxShadow: "none", borderRadius: 0, textAlign: "start" }}
            >
              <Link to={"/plants"}>
                <MoorePlantLogo />
              </Link>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={6} md={2}>
            <Item
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                textAlign: "center",
                fontFamily: "Raleway",
              }}
            >
              Address:
            </Item>
          </Grid>
          <Grid item xs={6} md={10}>
            <Item
              sx={{ boxShadow: "none", borderRadius: 0, textAlign: "start" }}
            >
              25 Winchester Street, Lyttleton
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={6} md={2}>
            <Item
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                textAlign: "center",
                fontFamily: "Oxygen",
              }}
            >
              Email:
            </Item>
          </Grid>
          <Grid item xs={6} md={10}>
            <Item
              sx={{ boxShadow: "none", borderRadius: 0, textAlign: "start" }}
            >
              info@mooreplants.co.nz
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={0} columns={16}>
          <Grid container item spacing={0}>
            <FormRow />
          </Grid>
        </Grid>
      </Container>
      <Copyright sx={{ mt: 2 }} />
    </Box>
  );
};
export default Footer;
