import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PotsAccordion } from "./PotsAccordion";
import Grid from "@mui/material/Grid";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";

export const SideBarPotFilter = (props) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={6} md={8}>
          <Typography textAlign="start" marginLeft="10px">
            Filters
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} sx={{ justifyContent: "flex-end" }}>
          <Button size="small" endIcon={<ReplayIcon />} sx={{color:'#102F25'}} onClick={() => props.setParams({type:"Pot"})}>
            Reset
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ overflow: "auto" }}>
        <PotsAccordion {...props} />
      </Box>
    </Box>
  );
};
