import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PriceChange } from "@mui/icons-material";

export default function OrderBy(props) {

  const handleChange = (event) => {
    props.setParams({
      ...props.params,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box
      sx={{ marginBottom: "20px", marginTop: "20px", minWidth: 120 }}
      size="small"
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          name={"orderBy"}
          id="orderBy"
          value={props.params.orderBy || "products.title ASC"}
          label="Order By"
          onChange={handleChange}
        >
          <MenuItem value={"products.title ASC"}>Title</MenuItem>
          <MenuItem value={"products.price ASC"}>Highest Price</MenuItem>
          <MenuItem value={"products.price DESC"}>Lowest Price</MenuItem>
          <MenuItem value={"products.created_at DESC"}>Recently Added</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
