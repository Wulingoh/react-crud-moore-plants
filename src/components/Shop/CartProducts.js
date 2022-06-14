import React from "react";
import { Box, Container, Divider } from "@mui/material";
import { useCart } from "./CartContext";
import { CartItem } from "./CartItem";

const CartProducts = () => {
  const { cartItems } = useCart();
  return (
    <Box sx={{ backgroundColor: "#F3F7F3" }}>
      <div>
        {cartItems.map((product) => (
          <div key={product.product_id}>
            <div>
              <CartItem product={product} />
            </div>
            <Divider sx={{ borderBottomWidth: 2 }} ></Divider>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CartProducts;
