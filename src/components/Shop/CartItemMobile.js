import React, { useState } from "react";
import { useCart } from "./CartContext";
import { IMG_PATH } from "../../config";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Img = styled("img")({
    display: "flex",
    width: "100%",
    height: "100%",
  });

export const CartItemMobile = ({ product }) => {
  const { increase, decrease, removeItem } = useCart();

  return (
    <Grid container sx={{ marginTop: "10px", marginBottom: "10px" }}>
      <Grid item xs={4}>
        <Img src={`${IMG_PATH}${product.img}`}  alt="" />
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>{product.title}</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {product.latin_name}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Stack>
          <Typography sx={{ fontSize: "14px" }}>${product.price}</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {product.itemQuantity}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {product.itemQuantity > 1 && (
            <Button onClick={() => decrease(product)}>
              <RemoveCircleOutlineOutlinedIcon
                width={"10px"}
                sx={{ color: "#718879" }}
              />
            </Button>
          )}
          {product.itemQuantity === 1 && (
            <Button onClick={() => removeItem(product)}>
              <DeleteForeverOutlinedIcon
                width={"10px"}
                sx={{ color: "#718879" }}
              />
            </Button>
          )}
          <Button
            onClick={() => increase(product)}
            disabled={product.itemQuantity >= product.quantity}
          >
            <AddCircleOutlineOutlinedIcon
              width={"10px"}
              sx={{ color: "#718879" }}
            />
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
