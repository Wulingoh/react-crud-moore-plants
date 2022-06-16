import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PotFactsAccordion from "./PotFactsAccordion";
import { PotFactsDesktop } from "./PotFactsDesktop";
import { useProductDetailsShopList } from "../FetchApi";
import ProductCarousel from "./ProductCarousel";
import Button from "@mui/material/Button";
import PromiseFooter from "./PromiseFooter";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { useCart } from "./CartContext";

export const PotDetails = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const productDetails = useProductDetailsShopList();
  const { addProduct } = useCart();
  
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
      <Container>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3} alignItems={"center"}>
            <Grid item md={6} sm={12}>
              <ProductCarousel />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "space-between" }}
            >
              <Container>
                <Stack spacing={2}>
                  <Typography sx={{ textAlign: "start" }}>
                    <span style={{fontWeight:"600"}}>Title: </span> {productDetails.title}
                  </Typography>
                  <Typography sx={{ textAlign: "start" }}>
                    <span style={{fontWeight:"600"}}>Price: </span> ${productDetails.price}
                  </Typography>
                  <Typography sx={{ textAlign: "start" }}>
                  <span style={{fontWeight:"600"}}>Size: </span>{productDetails.size?.toUpperCase()}
                  </Typography>
                  <Typography sx={{ textAlign: "start" }}>
                  <span style={{fontWeight:"600"}}>Color: </span>{productDetails.color}
                  </Typography>
                  {productDetails.quantity <= 0 ? (
                    <Typography
                      sx={{
                        textAlign: "start",
                        fontWeight: "600",
                        color: "darkred",
                      }}
                    >
                      Out Of Stock
                    </Typography>
                  ) : (
                    <Typography sx={{ textAlign: "start" }}>
                      In Stock
                    </Typography>
                  )}
                </Stack>
                <Grid container sx={{ marginTop: "20px" }}>
                  <Grid item xs={12}>
                    {productDetails.quantity >= 0 && (
                      <Button
                        fullWidth
                        size="small"
                        sx={{
                          color: "white",
                          backgroundColor: "#102F25",
                          border: "1px solid black",
                          "&:hover": {
                            background: "#fff",
                            color: "#102F25",
                          },
                        }}
                        onClick={() => addProduct(productDetails)}
                      >
                        ADD POT TO BAG
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Box>
        {isMobile ? <PotFactsAccordion /> : <PotFactsDesktop />}
        <Box sx={{ marginBottom: "50px" }}>
          <PromiseFooter />
        </Box>
      </Container>
    </main>
  );
};
export default PotDetails;
