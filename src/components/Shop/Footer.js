import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactComponent as MoorePlantLogo } from "../Images/moorePlantLogo1.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#718879",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
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
          <TwitterIcon />
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
          <FacebookIcon />
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
          <InstagramIcon />
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function FullWidthGrid() {
  return (
    <Box
      sx={{
        flexGrow: 0,
        paddingLeft: "0",
        paddingRight: "0",
        backgroundColor: "#718879",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} marginLeft="15px">
          <Item sx={{ textAlign: "start"}}><MoorePlantLogo  /></Item>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} md={2} >
          <Item sx={{ boxShadow: "none", borderRadius: 0, textAlign:"center", fontFamily:"Raleway" }}>Address:</Item>
        </Grid>
        <Grid item xs={6} md={10}>
          <Item sx={{ boxShadow: "none", borderRadius: 0, textAlign:"start" }}>25 Winchester Street, Lyttleton</Item>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} md={2}>
          <Item sx={{ boxShadow: "none", borderRadius: 0, textAlign:"center", fontFamily:"Oxygen" }}>Email:</Item>
        </Grid>
        <Grid item xs={6} md={10}>
          <Item sx={{ boxShadow: "none", borderRadius: 0 , textAlign:"start"}}>info@mooreplants.co.nz</Item>
        </Grid>
      </Grid>
      <Grid container spacing={0} columns={16}>
        <Grid container item spacing={0}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
