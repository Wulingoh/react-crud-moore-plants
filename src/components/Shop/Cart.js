import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import useAuth from "../AuthContext";
import Button from '@mui/material/Button';
import {Grid, Paper, Stack} from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useCart } from './CartContext'
import CartProducts from './CartProducts';
import { PayPal } from "./PayPal";

export const Cart = ({ onClose }) => {
  const { user } = useAuth()
  const { shipping, total, subtotal, cartItems } = useCart();
  const navigate = useNavigate();
  const onCheckout = () => {
    onClose();
    if (user) {
      navigate('/checkout');
    } else {
      navigate(`/signup`);
    }
  }

  return (
    <Box>
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Your bag</Typography>
          </Grid>
          <Grid item xs={6}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box>
          <Grid container>
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <Grid container>
                <Grid item>
                  <Typography>Your cart is empty</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
        <Box>
          <Stack>
            {cartItems.length > 0 && (
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Subtotal</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Delivery</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>${shipping.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Total</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>${total.toFixed(2)}</Typography>
                </Grid>
              </Grid>
            )}
          </Stack>
          <Grid container>
            <Grid item xs={6}>
              <Button
                fullWidth
                size="small"
                onClick={onClose}
              >
                <ArrowBackIosIcon />
                Keep Browsing
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                size="small"
                onClick={onCheckout}
              >
                Checkout
                <ArrowForwardIosIcon />
              </Button>
            </Grid>
            {!!user && <Grid item xs={12}>
              <PayPal />
            </Grid>}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}