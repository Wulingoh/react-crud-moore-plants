import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { Route, Routes, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Plants from "./Plants";
import Pots from "./Pots";
import SignUp from "./SignUp";
import Login from "./Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  pallette: {
    primary: {
      main: '#2E4D43',
    },
}});

function Shop() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
        <Routes>
          <Route index element={"Index"} />
          <Route path="/products/:productId" element={"Product"} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/howToGreen" element={"How To Green"} />
          <Route path="/about" element={"Story"} />
          <Route path="/contact" element={"Contact"} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default Shop;
