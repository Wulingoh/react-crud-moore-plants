import * as React from "react";
import { useProductDetailsShopList } from "../FetchApi";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export const PotFactsDesktop = () => {
  const productDetails = useProductDetailsShopList();
  return (
    <div style={{ marginBottom: "80px", marginTop:"50px" }}>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Oxygen", fontWeight:"700",fontSize:"18px"  }}>Quick Facts</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginBottom: "50px",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid container spacing={3}>
          {productDetails.facts?.map((fact, key) => (
            <Grid
              key={key}
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid container>
                <Grid item md={6} sm={3}>
                  <Typography sx={{ fontWeight: "600", textAlign: "left" }}>
                    {fact.title}:
                  </Typography>
                </Grid>
                <Grid item md={6} sm={9}>
                  <Typography sx={{ fontWeight: "Regular", textAlign: "left" }}>
                    {fact.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Oxygen", fontWeight:"700",fontSize:"18px"  }}>About Pot</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginBottom: "20px",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={12} sm={12} sx={{ display: "flex" }}>
            <Container>
              <Grid container alignItems={"flex-start"}>
                <Grid item xs={2}>
                  <FactCheckOutlinedIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{textAlign:"start"}}>
                    {productDetails.content}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
