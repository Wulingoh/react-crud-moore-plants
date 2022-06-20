import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import useAuth from "../AuthContext";
import Button from "@mui/material/Button";
import { Grid, Container, ListItemButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { useCart } from "./CartContext";
import {CartProductsMobile}  from "./CartProductsMobile";
import { PayPal } from "./PayPal";



export const CartMobile = ({ onClose }) => {
  const { user } = useAuth();
  const { shipping, total, subtotal, cartItems } = useCart();
  const navigate = useNavigate();
  const onCheckout = () => {
    onClose();
    if (user) {
      navigate("/checkout");
    } else {
      navigate(`/signup`);
    }
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Container
        sx={{
          backgroundColor: "#F3F7F3",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item xs={6} sx={{ flexGrow: 0 }}>
            <Typography>Your bag</Typography>
          </Grid>
          <Grid item xs={6} sx={{ flexGrow: 0 }}>
            <ListItemButton
              sx={{ justifyContent: "flex-end" }}
              onClick={onClose}
            >
              <CloseIcon />
            </ListItemButton>
          </Grid>
          <Grid item xs={12} marginTop={"10px"} marginBottom={"10px"}>
            {cartItems.length > 0 ? (
              <CartProductsMobile />
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
              <Grid item xs={6}>
                <Typography>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"end"}>${total.toFixed(2)}</Typography>
              </Grid>
            </>
          )}
          <Grid item xs={6} marginTop={"10px"}>
            <Button
              fullWidth
              size="small"
              onClick={onClose}
              sx={{
                color: "black",
                border: '1px solid black' ,
                "&:hover": {
                  background: "#102F25",
                  color: "#fff",
                },
              }}
            >
              <ArrowBackIosIcon sx={{ color: "#718879" }} />
              Keep Browsing
            </Button>
          </Grid>
          <Grid item xs={6} marginTop={"10px"}>
            <Button
              fullWidth
              size="small"
              onClick={onCheckout}
              sx={{
                color: "white",
                backgroundColor: "#102F25",
                border: '1px solid black' ,
                "&:hover": {
                  background: "#fff",
                  color: "#102F25"
                },
              }}
            >
              Checkout
              <ArrowForwardIosIcon sx={{ color: "#718879" }} />
            </Button>
          </Grid>
          {!!user && (
            <Grid item xs={12} marginTop={"10px"}>
              <PayPal />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
