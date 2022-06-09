import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

import { useCart } from './CartContext';
import { CartItem } from './CartItem'


const CartProducts = () => {

    const { cartItems } = useCart();

    return (
      <Box>
        <Grid container>
          <Grid item xs={12}>
            {cartItems.map((product) => (
              <Grid key={product.product_id} container>
                <Grid item xs={12}>
                  <CartItem key={product.product_id} product={product} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    );
}
 
export default CartProducts;

