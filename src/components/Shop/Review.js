import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import useAuth from "../AuthContext";
import { Grid, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCart } from "./CartContext";
import CartProducts from "./CartProducts";
import { CartProductsMobile } from "./CartProductsMobile";


export const Review = () => {
  const { shipping, total, subtotal, cartItems } = useCart();
  const isMobile = useMediaQuery("(max-width:600px)");
  const mobileCartProduct = () => {return isMobile ? <CartProductsMobile /> : <CartProducts />};

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Container
        sx={{
          backgroundColor: "#F3F7F3",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sx={{ flexGrow: 0, marginTop:"20px" }}>
            <Typography textAlign={"center"}>Order Summary</Typography>
          </Grid>
          <Grid item xs={12} marginTop={"10px"} marginBottom={"10px"}>
            {cartItems.length > 0 ? (
              isMobile ? <CartProductsMobile /> : <CartProducts />
            ) : (
              <div item>
                <Typography>Your cart is empty</Typography>
              </div>
            )}
          </Grid>
          {cartItems.length > 0 && (
            <>
              <Grid item xs={6} sx={{ flexGrow: 0 }}>
                <Typography>Subtotal</Typography>
              </Grid>
              <Grid item xs={6} sx={{ flexGrow: 0 }}>
                <Typography textAlign={"end"}>
                  ${subtotal.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Delivery</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"end"}>
                  ${shipping.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{marginBottom:"30px", marginTop:"20px"}}>
                <Typography>Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{marginBottom:"30px", marginTop:"20px"}}>
                <Typography textAlign={"end"}>${total.toFixed(2)}</Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
