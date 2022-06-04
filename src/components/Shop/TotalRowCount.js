import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProductionQuantityLimitsSharp } from "@mui/icons-material";

export default function TotalRowCount(props) {


  return (
    <Box sx={{ minWidth: 120, marginTop: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><Typography>Product Count: {props.products.length}</Typography></InputLabel>
      </FormControl>
    </Box>
  );
}
