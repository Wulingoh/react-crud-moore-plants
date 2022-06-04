import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PlantsAccordion } from "./PlantsAccordion";
import Grid from "@mui/material/Grid";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";

export const SideBarFilter = (props) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={6} md={8}>
          <Typography textAlign="start" marginLeft="10px">
            Filters
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} sx={{ justifyContent: "flex-end" }}>
          <Button size="small" endIcon={<ReplayIcon />} onClick={() => props.setParams({})}>
            Reset
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ overflow: "auto" }}>
        <PlantsAccordion {...props} />
      </Box>
    </Box>
  );
};
