import React from "react";
import { useCart } from "./CartContext";
import { IMG_PATH } from "../../config";
// import { formatNumber } from '../../helpers/utils';
import { Grid, Stack, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box } from "@mui/system";

export const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <img src={`${IMG_PATH}${product.img}`} alt="" />
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <Typography>Title</Typography>
            <Typography>Type</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <Typography>Price</Typography>
            <Typography>{product.price}</Typography>
            <Typography>{product.quantity}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <button
            onClick={() => increase(product)}
            className="btn btn-primary btn-sm mr-2 mb-1"
          >
            <AddCircleOutlineOutlinedIcon width={"20px"} />
          </button>

          {product.quantity > 1 && (
            <button
              onClick={() => decrease(product)}
              className="btn btn-danger btn-sm mb-1"
            >
              <RemoveCircleOutlineOutlinedIcon width={"20px"} />
            </button>
          )}

          {product.quantity === 1 && (
            <button
              onClick={() => removeProduct(product)}
              className="btn btn-danger btn-sm mb-1"
            >
              <DeleteForeverOutlinedIcon width={"20px"} />
            </button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
