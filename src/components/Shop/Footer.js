import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#718879",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Item>md=12</Item>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Item><TwitterIcon /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
