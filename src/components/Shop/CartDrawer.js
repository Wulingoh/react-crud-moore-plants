import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useCart } from './CartContext'
import { CartItem } from './CartItem'

export const CartDrawer = () => {
  const { cartItems } = useCart()

  return (
    <>
      <Typography>Bag</Typography>
      {cartItems.map(product => <CartItem key={product.product_id} product={product} />)}
    </>
  )
}