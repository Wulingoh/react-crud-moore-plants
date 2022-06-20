import * as React from "react";
import useAuth from "../AuthContext";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { PayPal } from "./PayPal";
import { CashPickUp } from "./CashPickUp";
import Checkbox from '@mui/material/Checkbox';
import { useCart } from './CartContext'
import { Review } from "./Review";

export const Checkout = () => {
  const { setShipping, shipping } = useCart();
  const { user, loading } = useAuth()

  if (loading) return null
  if (!user || user.role !== 'Customer') {
    return <Navigate to="/signup" replace />;
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center" marginBottom={"10px"}>
          Checkout: 
        </Typography>
        <Container>
          <Review />
        </Container>
        <Typography variant="body2" marginBottom={"20px"}>Delivery Option</Typography>
        <Checkbox onClick={(event) => setShipping(event.target.checked ? 5 : 0)} checked={!!shipping} />Delivery ($5)
        <Typography variant="body2" marginBottom={"20px"}>Please Select your payment method.</Typography>
        <PayPal />
        <div style={{marginBottom:"10px"}}></div>
        <CashPickUp />
      </Paper>
    </Container>
  );
};
