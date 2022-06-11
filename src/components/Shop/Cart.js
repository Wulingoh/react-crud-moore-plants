import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from "../AuthContext";
import Drawer from '@mui/material/Drawer';
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Grid, Paper, Stack} from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useCart } from './CartContext'
import { CartItem } from './CartItem'
import CartProducts from './CartProducts';


export const Cart = ({ onClose }) => {
  const { user } = useAuth()
  const { shipping, total, subtotal, cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();
  const navigate = useNavigate();
  const onCheckout = () => {
    onClose();
    if (user) {
      handleCheckout();
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
            {checkout && (
              <Grid container>
                <Grid item>
                  <Typography>Checkout successfully</Typography>
                  <Link to="/" className="btn btn-outline-success btn-sm">
                    BUY MORE
                  </Link>
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
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}