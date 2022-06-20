import React from "react";
import { Box, Container, Divider } from "@mui/material";
import { useCart } from "./CartContext";
import { CartItemMobile } from "./CartItemMobile";

 export const CartProductsMobile = () => {
  const { cartItems } = useCart();
  return (
    <Box sx={{ backgroundColor: "#F3F7F3" }}>
      <div>
        {cartItems.map((product) => (
          <div key={product.product_id}>
            <div>
              <CartItemMobile product={product} />
            </div>
            <Divider sx={{ borderBottomWidth: 2 }} ></Divider>
          </div>
        ))}
      </div>
    </Box>
  );
};


