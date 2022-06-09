import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
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

const drawerWidth = 100;


export const Cart = ({ onClose }) => {
  const { delivery, total, subtotal, cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();

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
                  <Typography>${delivery.toFixed(2)}</Typography>
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
              >
                <ArrowBackIosIcon />
                Keep Browsing
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                size="small"
                onClick={handleCheckout}
              >
                <ArrowForwardIosIcon />
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}