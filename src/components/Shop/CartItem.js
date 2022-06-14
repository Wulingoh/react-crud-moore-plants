import React, { useState } from "react";
import { useCart } from "./CartContext";
import { IMG_PATH } from "../../config";
import { Button, Grid, Stack, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";



export const CartItem = ({ product }) => {
  const { increase, decrease, removeItem } = useCart();

  return (
    <Grid container sx={{ marginTop: "10px", marginBottom:"10px" }}>
      <Grid item xs={3}>
        <img src={`${IMG_PATH}${product.img}`} width="75" alt="" />
      </Grid>
      <Grid item xs={3}>
        <Stack>
          <Typography sx={{ fontSize: "14px", fontFamily: "Raleway" }}>
            {product.title}
          </Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: "Raleway" }}>
            {product.latin_name}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack>
          <Typography sx={{ fontSize: "14px", fontFamily: "Raleway" }}>
            ${product.price}
          </Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: "Raleway" }}>
            {product.itemQuantity}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Button onClick={() => increase(product)} disabled={product.itemQuantity >= product.quantity}>
            <AddCircleOutlineOutlinedIcon width={"10px"} sx={{ color:"#718879"}}/>
          </Button>
          {product.itemQuantity > 1 && (
            <Button onClick={() => decrease(product)}>
              <RemoveCircleOutlineOutlinedIcon width={"10px"} sx={{ color:"#718879"}}/>
            </Button>
          )}
          {product.itemQuantity === 1 && (
            <Button onClick={() => removeItem(product)}>
              <DeleteForeverOutlinedIcon width={"10px"} sx={{ color:"#718879"}}/>
            </Button>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
