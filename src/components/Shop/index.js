import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';

function Shop() {
  return (
    <>
      <ResponsiveAppBar />
      <Box>
          <Routes>
              <Route index element={'Index'} />
              <Route path="/products/:productId" element={'Product'} />
              <Route path="/plants" element={'Plants'} />
              <Route path="/pots" element={'Pots'} />
              <Route path="/howToGreen" element={'How To Green'} />
              <Route path="/about" element={'Story'} />
              <Route path="/shop" element={'Shop'} />
              <Route path="/contact" element={'Contact'} />

          </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default Shop;
