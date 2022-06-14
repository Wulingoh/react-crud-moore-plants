import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Plants from "./Plants";
import Pots from "./Pots";
import HowToGreen from "./HowToGreen";
import Story from "./Story";
import Contact from "./Contact";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import PlantDetails from "./PlantDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "./CartContext";
import { Checkout } from "./Checkout";
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

const theme = createTheme({
  pallette: {
    primary: {
      main: "#2E4D43",
    },
  },
  typography: {
    fontFamily: "Raleway"
  }
});

const initialOptions = {
  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "NZD",
  intent: "capture"
};

function Shop() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <PayPalScriptProvider options={initialOptions}>
          <ResponsiveAppBar />
          <Routes>
            <Route index element={"Index"} />
            <Route path="/plants/:productId" element={<PlantDetails />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/pots" element={<Pots />} />
            <Route path="/howToGreen" element={<HowToGreen />} />
            <Route path="/about" element={<Story />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </PayPalScriptProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default Shop;
