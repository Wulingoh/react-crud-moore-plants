import React, {useState} from "react";
import { useCart } from "./CartContext";
import { IMG_PATH } from "../../config";
// import { formatNumber } from '../../helpers/utils';
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export const CartItem = ({ product }) => {
  const { increase, decrease, removeItem } = useCart();


  return (
    <Box>
      <Paper>
        <Grid container>
          <Grid item xs={3}>
            <img src={`${IMG_PATH}${product.img}`} alt="" />
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <Typography>{product.title}</Typography>
              <Typography>{product.latin_name}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <Typography>Price</Typography>
              <Typography>${product.price}</Typography>
              <Typography>{product.quantity}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack direction={"row"}>
              {product.quantity === 1 && (
                <Button onClick={() => removeItem(product)}>
                  <DeleteForeverOutlinedIcon width={"20px"} />
                </Button>
              )}
              <Button onClick={() => increase(product)}>
                <AddCircleOutlineOutlinedIcon width={"20px"} />
              </Button>

              {product.quantity > 1 && (
                <Button onClick={() => decrease(product)}>
                  <RemoveCircleOutlineOutlinedIcon width={"20px"} />
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
