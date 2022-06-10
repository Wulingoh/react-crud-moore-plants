import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "./CartContext";
import axios from "axios";
import useAuth from "../AuthContext";

export const Checkout = () => {
  const { cartItems, total, subtotal, shipping } = useCart();
  const { user } = useAuth();

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    items: cartItems.map((product) => ({
                      name: product.title,
                      unit_amount: { value: product.price, currency_code: 'NZD' },
                      quantity: product.quantity
                    })),
                    amount: {
                      value: total,
                      currency_code: 'NZD',
                      breakdown: {
                        item_total: { value: subtotal, currency_code: 'NZD' },
                        shipping: { value: shipping, currency_code: 'NZD' }
                      }
                    },
                  },
                ],
              })
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const { email_address } = details.payer
              const { address, name } = details.purchase_units[0].shipping
              axios.post(`/api/customer/orders`, {
                status: 'Paid',
                user_id: user.userId,
                name: name.full_name,
                email: email_address,
                line_1: address.address_line_1,
                line_2: address.address_line_2,
                city: address.admin_area_2,
                region: address.admin_area_1,
                country: address.country_code,
                items: cartItems.map((product) => ({
                  product_id: product.product_id,
                  quantity: product.quantity,
                  price: product.price
                })),
                shipping,
                subtotal,
                total,
                tax: 0
              });
            })
          }}
        />
      </Paper>
    </Container>
  );
};
